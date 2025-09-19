from .models import MenuItem, Prices, Reviews, Reply, Subtype, Category, Post
from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model= User
    fields = ['id', 'first_name', 'last_name', 'email']


class RepliesSerializer(serializers.ModelSerializer):
  rply_icon = serializers.ImageField(use_url=True)
  user = UserSerializer(source='rply_user', read_only=True)
  display_name = serializers.CharField(source='get_display_name', read_only=True)

  class Meta:
    model = Reply
    fields = [
      'rply_id',
      'user',
      'display_name',
      'rply_name',
      'rply_icon',
      'rply_text',
      'rply_date',
    ]
    read_only_fields = ['rply_user', 'rply_date']

class ReviewSerializer(serializers.ModelSerializer):
  rvw_replies = RepliesSerializer(many=True)
  rvw_icon = serializers.ImageField(use_url=True)
  rvw_image = serializers.ImageField(use_url=True)
  rvw_item = serializers.CharField(source='rvw_item.mnu_name', read_only=True)
  rvw_date= serializers.DateTimeField(format="%I:%M %p %B %d")
  user = UserSerializer(source='rvw_user', read_only=True)
  display_name= serializers.CharField(source='get_display_name', read_only=True)
  # likes_count = serializers.SerializerMethodField()
  # user_liked = serializers.SerializerMethodField()

  class Meta:
    model = Reviews
    fields =[
      'rvw_id', 
      'rvw_item',
      'user',
      'rvw_icon',
      'display_name',
      'rvw_name',
      'rvw_rate',
      'rvw_text',
      'rvw_image',
      'rvw_date',
      # 'likes_count',
      # 'user_liked',

      'rvw_replies',
    ]
    read_only_fields = ['rvw_user', 'rvw_date']

    def get_likes_count(self, obj):
      return obj.rvw_likes.count() if hasattr(obj, 'rvw_likes') else 0
    
    def get_user_liked(self, obj):
      request = self.context.get('request')
      if request and request.user.is_authenticated:
          return obj.rvw_likes.filter(like_user=request.user).exists() if hasattr(obj, 'rvw_likes') else False
      return False

class PricesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Prices
    fields = [ 'menu_item', 'label', 'price']


class MenuItemSerializer(serializers.ModelSerializer):
  mnu_prices = PricesSerializer(many=True, read_only=True)

  mnu_type = serializers.StringRelatedField()
  mnu_category = serializers.StringRelatedField()
  mnu_subtype = serializers.StringRelatedField()
  mnu_image = serializers.ImageField(use_url=True)

  class Meta:
    model = MenuItem
    # fields = "__all__"
    fields = [
      'mnu_id', 
      'mnu_type',
      'mnu_category',
      'mnu_subtype',
      'mnu_name',
      'mnu_image',
      'mnu_description',
      'mnu_prices'
    ]

class MenuItemDetailSerializer(serializers.ModelSerializer):
  mnu_prices = PricesSerializer(many=True, read_only=True)

  mnu_type = serializers.StringRelatedField()
  mnu_category = serializers.StringRelatedField()
  mnu_subtype = serializers.StringRelatedField()
  mnu_image = serializers.ImageField(use_url=True)
  reviews = ReviewSerializer(many=True)

  class Meta:
    model = MenuItem
    fields = [
      'mnu_id', 
      'mnu_type',
      'mnu_category',
      'mnu_subtype',
      'mnu_name',
      'mnu_image',
      'mnu_description',
      'mnu_prices',
      'reviews',

    ]

class SubtypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Subtype
    fields = ['name']

class CategorySerializer(serializers.ModelSerializer):
    subtypes = SubtypeSerializer(many=True, read_only=True)

    class Meta:
      model= Category
      fields = [
        'name',
        'subtypes',
      ]

class PostSerializer(serializers.ModelSerializer):
  pst_image = serializers.ImageField(use_url = True)
  pst_menu_item = serializers.CharField(source='pst_menu_item.mnu_name', read_only=True)

  class Meta:
    model = Post
    fields = [
      'pst_id',
      'pst_image',
      'pst_created_at',
      'pst_caption',
      'pst_menu_item'
    ]