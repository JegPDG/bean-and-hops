from django.urls import path, include
from . import views, auth_views
from .views import MenuItemAPIView, ReviewsAPIViewSet, SubtypeAPIView, CategoryAPIView, PostAPIVIew, ReviewListCreateView, ReviewDetailView, toggle_like, add_reply
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
  path("chaining/", include("smart_selects.urls")),
  path('subtype/', SubtypeAPIView.as_view(), name='subtype'),
  path('category/', CategoryAPIView.as_view(), name='category'),
  path('post/', PostAPIVIew.as_view(), name='post'),

   # Authentication
  path('auth/google/', auth_views.google_auth, name='google_auth'),
  path('auth/logout/', auth_views.logout, name='logout'),
  path('auth/profile/', auth_views.user_profile, name='user_profile'),
  
  # API endpoints
  # path('menu-items/', view.menu_items, name='menu_items'),
  path('reviews/', views.ReviewListCreateView.as_view(), name='review_list_create'),
  path('reviews/<uuid:rvw_id>/', views.ReviewDetailView.as_view(), name='review_detail'),
  path('reviews/<uuid:review_id>/like/', views.toggle_like, name='toggle_like'),
  path('reviews/<uuid:review_id>/reply/', views.add_reply, name='add_reply'),

]

router = DefaultRouter()
# router.register('reviews', views.ReviewsAPIViewSet)
router.register('menuitem', views.MenuItemAPIView, basename='menuitem')
router.register('item-detail', views.MenuDetailAPIViewSet, basename='menuitem-detail')

urlpatterns += router.urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)