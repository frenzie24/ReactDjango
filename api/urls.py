from django.urls import path, include
from rest_framework.routers import DefaultRouter

#import the userviewset from views.py
from .views import UserViewSet, RoleViewSet, LoginView

router = DefaultRouter()
router.register('users', UserViewSet)

#router.register('register_view', RegisterView)

router.register('login_view', LoginView, basename='login_view')
#:O
router.register('roles', RoleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]