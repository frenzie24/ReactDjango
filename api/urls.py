from django.urls import path, include
from rest_framework.routers import DefaultRouter
#import the userviewset from views.py
from .views import UserViewSet, RoleViewSet

router = DefaultRouter()
router.register('users', UserViewSet)
#:O
router.register('roles', RoleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]