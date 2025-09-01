from django.contrib import admin
from .models import MenuItem, Reviews, Reply, Prices, Category, Type, Subtype, Post

# Tabular inlines
class PricesTabularInline(admin.TabularInline):
  model = Prices
  raw_id_fields = ['menu_item']
  autocomplete_fields = ['menu_item']
  extra = 0

class ReviewTabularinline(admin.TabularInline):
  model = Reviews
  raw_id_fields = ['rvw_item']
  autocomplete_fields = ['rvw_item']
  extra = 0

class ReplyTabularInline(admin.TabularInline):
  model = Reply
  raw_id_fields = ['rply_to_person']
  autocomplete_fields = ['rply_to_person']
  extra = 0

# Register your models here.

class PostAdmin(admin.ModelAdmin):
  list_display = ['pst_id','pst_image','pst_created_at', 'pst_caption',]
  search_fields =['pst_id', 'pst_caption']

  def has_delete_permission(self, request, obj = None):
    return True



class TypeAdmin(admin.ModelAdmin):
  list_display = ['name']
  search_fields = ['name']

  def has_delete_permission(self, request, obj = None):
    return True

class CategoryAdmin(admin.ModelAdmin):
  list_display = ['type', 'name']
  search_fields = ['type', 'name']

  def has_delete_permission(self, request, obj = None):
    return True

class SubTypeAdmin(admin.ModelAdmin):
  list_display = ['category', 'name']

  def has_delete_permission(self, request, obj = None):
    return True

class ReviewAdmin(admin.ModelAdmin):
  list_display = [
    'rvw_id', 
    'rvw_item',
    'rvw_icon',
    'rvw_name',
    'rvw_rate',
    'rvw_text',
    'rvw_image',
    'rvw_date',
    ]
  
  search_fields =[
    'rvw_item',
    'rvw_name',
    'rvw_rate',
    'rvw_text',
    'rvw_date',
  ]

  inlines =[ReplyTabularInline]

  def has_delete_permission(self, request, obj = None):
    return True


class MenuItemAdmin(admin.ModelAdmin):
  
  list_display = [ 
    'mnu_id', 
    'mnu_type',
    'mnu_category',
    'mnu_subtype',
    'mnu_name',
    'mnu_image',
    'mnu_description',
  ]

  search_fields = [ 
    'mnu_type',
    'mnu_category',
    'mnu_subtype',
    'mnu_name',
  ]

  inlines = [PricesTabularInline, ReviewTabularinline]

  def has_delete_permission(self, request, obj = None):
    return True
  
admin.site.register(MenuItem, MenuItemAdmin)
admin.site.register(Type, TypeAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Subtype, SubTypeAdmin)
admin.site.register(Reviews, ReviewAdmin)
admin.site.register(Reply)
admin.site.register(Prices)
admin.site.register(Post, PostAdmin)






