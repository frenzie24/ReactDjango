from django.contrib import admin

from .models import User, Role
# Register your models here.
# list of models
models = [User, Role]
admin.register(User, Role)(admin.ModelAdmin)