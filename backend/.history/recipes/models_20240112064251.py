from django.db import models
from users.models import UserProfile
from django.contrib.auth.models import User

class Instruction(models.Model):
    text = models.TextField()
    
    def 
class Recipe(models.Model):
    # id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=225)
    description = models.TextField()
    instructions = models.ManyToManyField(Instruction)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)

    def __str__(self):
        return self.title