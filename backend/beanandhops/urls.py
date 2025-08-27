from django.urls import path, include
from . import views
from .views import MenuItemAPIView, ReviewsAPIViewSet
from rest_framework.routers import DefaultRouter


urlpatterns = [
  path('menuitem/', MenuItemAPIView.as_view(), name='menu-item'),
  path("chaining/", include("smart_selects.urls")),

]

router = DefaultRouter()
router.register('reviews', views.ReviewsAPIViewSet)

urlpatterns += router.urls
