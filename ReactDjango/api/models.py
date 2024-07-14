from django.db import models

# User Model will contain the first name, last name, email and hashed password of the user
# django creates a primary key by default
class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.TextField()
