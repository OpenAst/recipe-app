from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.recipe_list, name='recipe_list'),
    path('create-recipe/', views.create_recipe, name='create-recipe'),
    path('create/', views.create_recipe_form, name='create-recipe-form')
t]
