from django.db import models
from users.models import UserProfile
from django.contrib.auth.models import User

class Instruction(models.Model):
    text = models.TextField()
    
    def __str__(self):
        return self.text
    
    
class Recipe(models.Model):
    
    title = models.CharField(max_length=225)
    description = models.TextField()
    instructions = models.models.ForeignKey("app.Model", verbose_name=_(""), on_delete=models.CASCADE)(Instruction)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title