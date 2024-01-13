from django.db import models
from users.models import UserProfile
from django.contrib.auth.models import User
import datetime
    
class Recipe(models.Model):
    
    title = models.CharField(max_length=225)
    description = models.TextField()
    instructions = models.TextField('Add salt')
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    # created_at = models.DateField(Date('2024-01-12: 15) )
    
    def __str__(self):
        return self.title