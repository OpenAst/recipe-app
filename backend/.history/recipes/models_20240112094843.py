from django.db import models
from users.models import UserProfile
from django.contrib.auth.models import User
    
class Recipe(models.Model):
    
    title = models.CharField(max_length=225)
    description = models.TextField()
    instructions = models.TextField()
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, default=datetime.time.now)
    
    def __str__(self):
        return self.title