from django.urls import path, include
from . import views
from .views import MenuItemAPIView, ReviewsAPIViewSet
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # ... your other urls ...
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns = [
  path("chaining/", include("smart_selects.urls")),

]

router = DefaultRouter()
router.register('reviews', views.ReviewsAPIViewSet)
router.register('menuitem', views.MenuItemAPIView)

urlpatterns += router.urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)