from django.db import models
from users.models import UserProfile

class Recipe(models.Model):
    id = models.IntegerField(max_length=8)
    title = models.CharField(max_length=225)
    description = models.TextField()
    instructions = ArrayField(models.TextField())
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)

    def __str__(self):
        return self.title