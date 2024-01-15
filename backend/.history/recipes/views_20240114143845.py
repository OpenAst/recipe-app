from django.shortcuts import render
from .models import Recipe
from .form import RecipeForm
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.http import require_POST
import json

def recipe_list(request):
    recipes = Recipe.objects.all()
    return render(request, 'recipes/recipe_list.html', {'recipes': recipes})

def create_recipe(request):
   try:
       data = json.loads(request.body)
       title = data.get('title') 
       ingredients = data.get('ingredients')
       instructions = data.get('instructions')
       
       Recipe.objects.create(title=title, ingredients=ingredients, instructions=instructions )
       return JsonResponse({'message': 'Recipe created successfully'}, status=201)
   
   except Exception as e:
       return Json