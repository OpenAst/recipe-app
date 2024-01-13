from django.db import models
from users.models import UserProfile

class Recipe(models.Model):
    title = models.CharField(max_length=225)
    description = models.TextField()
    instructions = ArrayFieldmodels.TextField()
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)

    def __str__(self):
        return self.title