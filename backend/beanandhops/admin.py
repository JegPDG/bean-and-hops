from django.contrib import admin
from .models import MenuItem, Reviews, Reply, Prices, Category, Type, Subtype, Post

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.admin import GroupAdmin as BaseGroupAdmin
from django.contrib.auth.models import User, Group

from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm
from unfold.admin import ModelAdmin

admin.site.unregister(User)
admin.site.unregister(Group)

@admin.register(User)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    # Forms loaded from `unfold.forms`
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm


@admin.register(Group)
class GroupAdmin(BaseGroupAdmin, ModelAdmin):
    pass

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

class PostAdmin(ModelAdmin):
  list_display = [
    'pst_image',
    'pst_created_at', 
    'pst_caption',
    ]
  search_fields =['pst_id', 'pst_caption']

  def has_delete_permission(self, request, obj = None):
    return True



class ReviewAdmin(ModelAdmin):
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


class MenuItemAdmin(ModelAdmin):
  
  list_display = [  
    'mnu_name',
    'mnu_type',
    'mnu_category',
    'mnu_subtype',
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
admin.site.register(Reviews, ReviewAdmin)
admin.site.register(Reply)
admin.site.register(Prices)
admin.site.register(Post, PostAdmin)






