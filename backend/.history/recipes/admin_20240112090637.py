from django.contrib import admin

from .models import Recipe, Instruction


class RecipeAdmin(admin.ModelAdmin);
admin.site.register(Recipe)
admin.site.register(Instruction)

