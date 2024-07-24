


# Import rest_frameworks
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework import viewsets
#we need the user model and the userserializer
from .models import User, Role
from .serializers import UserSerializer, RoleSerializer

# userviewset uses the UserSerializer created in serializers.py
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        token = Token.objects.create(user=response.data['id'])
        return Response({'token': token.key})


class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        token = Token.objects.create(user=response.data['id'])
        return Response({'token': token.key})

class LoginView(viewsets.GenericViewSet):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            username = request.data.get('username')
            password = request.data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key})
            return Response({'error': 'Invalid Credentials'}, status=400)
        return Response({'error': 'Invalid Credentials'}, status=400)