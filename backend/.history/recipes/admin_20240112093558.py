from django.contrib import admin

from .models import Recipe, Instruction


class RecipeAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'description')

admin.site.register(Recipe)

