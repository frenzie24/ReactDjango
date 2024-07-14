from django.urls import path, include
from rest_framework.routers import DefaultRouter
#import the userviewset from views.py
from .views import UserViewSet

router = DefaultRouter()
router.register(r'items', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]