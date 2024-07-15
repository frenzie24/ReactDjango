from django.db import models

# User Model will contain the first name, last name, email and hashed password of the user
# django creates a primary key by default
class User(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    email = models.EmailField(null = True, max_length=100)
    password = models.TextField(null=True)

# a model describing a user's role
class Role(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    pay = models.DecimalField(max_digits=100000, decimal_places=2)