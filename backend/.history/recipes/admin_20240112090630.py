from django.contrib import admin

from .models import Recipe, Instruction


class RecipeAdmin(admin.Model)
admin.site.register(Recipe)
admin.site.register(Instruction)

