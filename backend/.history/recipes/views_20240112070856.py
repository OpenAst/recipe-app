from django.shortcuts import render
from .models import Recipe
from .form import RecipeForm
from djando.http import HttpResponseRedirect
from django.urls import reverse

def recipe_list(request):
    recipes = Recipe.objects.all()
    return render(request, 'recipes/recipe_list.html', {'recipes': recipes})

def create_recipe(request):
    if request.method == 'POST':
        form = RecipeForm(request.POST)
        if form.is_valid():
            recipe = form.save(commit=False)
            recipe.save()
            form.save_m2m()   
            success_message = 'Success! Recipe created.'         
            return HttpResponseRedirect(f'{reverse('recipe-list')}?ss
    else:
        form = Recipe()
    
    return render(request, 'recipes/create_recipe.html', {'form': form})    
            