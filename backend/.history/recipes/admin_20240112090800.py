from django.contrib import admin

from .models import Recipe, Instruction


class RecipeAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'description')
    
class Instruction(admin.ModelAdmin)    
admin.site.register(Recipe)
admin.site.register(Instruction)

