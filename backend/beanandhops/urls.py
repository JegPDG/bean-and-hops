from django.urls import path, include
from . import views
from .views import MenuItemAPIView, ReviewsAPIViewSet, SubtypeAPIView, CategoryAPIView, PostAPIVIew
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
  path("chaining/", include("smart_selects.urls")),
  path('subtype/', SubtypeAPIView.as_view(), name='subtype'),
  path('category/', CategoryAPIView.as_view(), name='category'),
  path('post/', PostAPIVIew.as_view(), name='post')


]

router = DefaultRouter()
router.register('reviews', views.ReviewsAPIViewSet)
router.register('menuitem', views.MenuItemAPIView, basename='menuitem')
router.register('item-detail', views.MenuDetailAPIViewSet, basename='menuitem-detail')

urlpatterns += router.urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)