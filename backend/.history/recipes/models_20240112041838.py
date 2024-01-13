from django.db import models, ArrayField
from users.models import UserProfile
from django.contrib.auth.model

class Recipe(models.Model):
    id = models.IntegerField(max_length=20)
    title = models.CharField(max_length=225)
    description = models.TextField()
    instructions = models.TextField()
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)

    def __str__(self):
        return self.title