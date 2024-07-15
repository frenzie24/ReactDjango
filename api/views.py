from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
#we need the user model and the userserializer
from .models import User, Role
from .serializers import UserSerializer, RoleSerializer

# userviewset uses the UserSerializer created in serializers.py
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer