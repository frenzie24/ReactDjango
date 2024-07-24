from rest_framework import serializers
from rest_framework.validators import UniqueValidator

#import the user model
from .models import User, Role

#userserializer
class UserSerializer(serializers.ModelSerializer):


    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        return user

    class Meta:
        model = User
        fields = '__all__'


#roleserializer
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

