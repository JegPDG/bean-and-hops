from django.shortcuts import render
from .models import MenuItem, Reviews, Reply, Subtype, Category, Post
from rest_framework.generics import ListAPIView
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import MenuItemSerializer, ReviewSerializers, SubtypeSerializer, CategorySerializer, MenuItemDetailSerializer, PostSerializer
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

class ReviewsAPIViewSet(viewsets.ModelViewSet):
  queryset = Reviews.objects.all()
  serializer_class = ReviewSerializers

class SubtypeAPIView(ListAPIView):
  queryset = Subtype.objects.all()
  serializer_class = SubtypeSerializer

class CategoryAPIView(ListAPIView):
  queryset = Category.objects.all()
  serializer_class= CategorySerializer
  
class PostAPIVIew(ListAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

