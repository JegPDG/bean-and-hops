from .models import MenuItem, Prices, Reviews, Reply, Subtype, Category
from rest_framework import serializers

class RepliesSerializer(serializers.ModelSerializer):
  rply_icon = serializers.ImageField(use_url=True)

  class Meta:
    model = Reply
    fields = [
      'rply_id',
      'rply_name',
      'rply_icon',
      'rply_text',
      'rply_date',
    ]

class ReviewSerializers(serializers.ModelSerializer):
  rvw_replies = RepliesSerializer(many=True)
  rvw_icon = serializers.ImageField(use_url=True)
  rvw_image = serializers.ImageField(use_url=True)
  rvw_item = serializers.CharField(source='rvw_item.mnu_name', read_only=True)
  rvw_date= serializers.DateTimeField(format="%I:%M %p %B %d")

  class Meta:
    model = Reviews
    fields =[
      'rvw_id', 
      'rvw_item',
      'rvw_icon',
      'rvw_name',
      'rvw_rate',
      'rvw_text',
      'rvw_image',
      'rvw_date',

      'rvw_replies',
    ]

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
  reviews = ReviewSerializers(many=True)

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