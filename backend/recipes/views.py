from django.shortcuts import render
from .models import Recipe
from .form import RecipeForm
from django.http import HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.views.decorators.http import require_POST
import json

def recipe_list(request):
    recipes = Recipe.objects.all()
    return render(request, 'recipes/recipe_list.html', {'recipes': recipes})

def create_recipe(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            title = data.get('title') 
            ingredients = data.get('ingredients')
            instructions = data.get('instructions')
            
            Recipe.objects.create(title=title, ingredients=ingredients, instructions=instructions)
            return JsonResponse({'message': 'Recipe created successfully'}, status=201)
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
        
def create_recipe_form(request):
    if request.method == 'GET':
        form = RecipeForm()
        return render(request, 'recipes/create_recipe_form.html', {'form': form})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)        
    