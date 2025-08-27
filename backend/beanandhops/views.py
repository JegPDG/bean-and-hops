from django.shortcuts import render
from .models import MenuItem, Reviews, Reply
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from .serializers import MenuItemSerializer, ReviewSerializers


# Create your views here.
class MenuItemAPIView(ListAPIView):
  queryset = MenuItem.objects.all()
  serializer_class = MenuItemSerializer
  
class ReviewsAPIViewSet(viewsets.ModelViewSet):
  queryset = Reviews.objects.all()
  serializer_class = ReviewSerializers

