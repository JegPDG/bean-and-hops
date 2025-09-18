from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Type, Category, Subtype


# Register your models here.
class TypeAdmin(ModelAdmin):
  list_display = ['name']
  search_fields = ['name']

  def has_delete_permission(self, request, obj = None):
    return True

class CategoryAdmin(ModelAdmin):
  list_display = ['type', 'name']
  search_fields = ['type', 'name']

  def has_delete_permission(self, request, obj = None):
    return True

class SubTypeAdmin(ModelAdmin):
  list_display = ['category', 'name']

  def has_delete_permission(self, request, obj = None):
    return True
  
admin.site.register(Type, TypeAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Subtype, SubTypeAdmin)