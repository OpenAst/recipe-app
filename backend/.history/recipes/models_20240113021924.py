from django.db import models
from users.models import UserProfile
from django.contrib.auth.models import User
from django.utils.timezodeimport 

    
class Recipe(models.Model):
    
    title = models.CharField(max_length=225)
    description = models.TextField()
    instructions = models.TextField(default='Add salt')
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_at = models.DateField(default=('2024-01-12'))
    
    def __str__(self):
        return self.title