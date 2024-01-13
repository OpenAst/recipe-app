from django.shortcuts import render
from .models import Recipe
from .form

def recipe_list(request):
    recipes = Recipe.objects.all()
    return render(request, 'recipe_list.html', {'recipes': recipes})

def create_recipe(request):
    if request.method == 'POST':
        form = RecipeForm(request.POST)
        if form.is_valid():
            form.save()
            # return redirect('recipe-list')
    else:
        form = Recipe()
    
    return render(request, 'create_recipe.html', {'form': form})    
            