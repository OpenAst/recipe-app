from django.shortcuts import render
from .models import Recipe
from .form import RecipeForm
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.http
def recipe_list(request):
    recipes = Recipe.objects.all()
    return render(request, 'recipes/recipe_list.html', {'recipes': recipes})

def create_recipe(request):
    