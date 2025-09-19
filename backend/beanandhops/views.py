from django.shortcuts import render
from .models import MenuItem, Reviews, Reply, Subtype, Category, Post, Like
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny, IsAuthenticated 
from .serializers import MenuItemSerializer, ReviewSerializer, SubtypeSerializer, CategorySerializer, MenuItemDetailSerializer, PostSerializer, RepliesSerializer
from collections import defaultdict
from django_filters.rest_framework import DjangoFilterBackend 

# Create your views here.
class MenuItemAPIView(viewsets.ModelViewSet):
  queryset = MenuItem.objects.all()
  serializer_class = MenuItemSerializer

  @action(detail=False, methods=['get'], url_path='grouped-items/(?P<subtype>[^/.]+)' )
  def group_by_subtype(self, request, subtype=None):
    items = MenuItem.objects.filter(mnu_subtype__name__iexact=subtype)
    serializer = self.get_serializer(items, many=True)
    return Response({
      "Subtype": subtype,
      "subtypeItem": serializer.data
    })
    
  @action(detail=False, methods=['get'], url_path='grouped-category/(?P<category>[^/.]+)')
  def group_by_category(self, request, category=None):
    items = MenuItem.objects.filter(mnu_category__name__iexact=category)
    serializer = self.get_serializer(items, many=True)

    grouped = defaultdict(list)
    for item in serializer.data:
        grouped[item["mnu_subtype"]].append(item)

    result = [{
        "Category": category,
        "Subtypes": [
            {
                "Subtype": subtype,
                "Items": items
            } for subtype, items in grouped.items()
        ]
    }]
    return Response(result)
  
class MenuDetailAPIViewSet(viewsets.ModelViewSet):
  queryset = MenuItem.objects.all()
  serializer_class = MenuItemDetailSerializer
  filter_backends = [DjangoFilterBackend]
  filterset_fields = ['mnu_subtype', 'mnu_name']



class ReviewListCreateView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    
    def get_queryset(self):
        menu_item_id = self.request.query_params.get('menu_item')
        if menu_item_id:
            return Reviews.objects.filter(rvw_item_id=menu_item_id).order_by('-rvw_date')
        return Reviews.objects.all().order_by('-rvw_date')
    
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAuthenticated()]
        return [AllowAny()]
    
    def perform_create(self, serializer):
        # Set the user from the authenticated request
        user = self.request.user
        serializer.save(
            rvw_user=user,
            rvw_name=f"{user.first_name} {user.last_name}".strip() or user.email
        )

class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'rvw_id'
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]
    
    def get_object(self):
        obj = super().get_object()
        # Only allow user to edit/delete their own reviews
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            if obj.rvw_user != self.request.user:
                raise PermissionError("You can only edit your own reviews")
        return obj
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def toggle_like(request, review_id):
    """
    Toggle like on a review
    """
    try:
        review = Reviews.objects.get(rvw_id=review_id)
        like, created = Like.objects.get_or_create(
            like_user=request.user,
            like_review=review
        )
        
        if not created:
            like.delete()
            return Response({
                'liked': False, 
                'likes_count': review.rvw_likes.count()
            })
        
        return Response({
            'liked': True, 
            'likes_count': review.rvw_likes.count()
        })
    
    except Reviews.DoesNotExist:
        return Response({'error': 'Review not found'}, status=404)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_reply(request, review_id):
    """
    Add reply to a review
    """
    try:
        review = Reviews.objects.get(rvw_id=review_id)
        content = request.data.get('content')
        
        if not content:
            return Response({'error': 'Content is required'}, status=400)
        
        user = request.user
        reply = Reply.objects.create(
            rply_user=user,
            rply_to_person=review,
            rply_text=content,
            rply_name=f"{user.first_name} {user.last_name}".strip() or user.email
        )
        
        serializer = RepliesSerializer(reply)
        return Response(serializer.data, status=201)
    
    except Reviews.DoesNotExist:
        return Response({'error': 'Review not found'}, status=404)

@api_view(['GET'])
@permission_classes([AllowAny])
def menu_items(request):
    """
    Get all menu items for the review form dropdown
    """
    from .models import MenuItem  # Import your existing MenuItem model
    
    items = MenuItem.objects.all()
    data = [{
        'id': str(item.mnu_id),
        'name': item.mnu_name,
        'description': item.mnu_description,
    } for item in items]
    
    return Response(data)

class ReviewsAPIViewSet(viewsets.ModelViewSet):
  queryset = Reviews.objects.all()
  serializer_class = ReviewSerializer

class SubtypeAPIView(generics.ListAPIView):
  queryset = Subtype.objects.all()
  serializer_class = SubtypeSerializer

class CategoryAPIView(generics.ListAPIView):
  queryset = Category.objects.all()
  serializer_class= CategorySerializer
  
class PostAPIVIew(generics.ListAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

