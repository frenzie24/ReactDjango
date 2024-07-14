from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
#we need the user model and the userserializer
from .models import User
from .serializers import UserSerializer

# userviewset uses the UserSerializer created in serializers.py
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer