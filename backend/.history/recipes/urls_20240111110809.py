from django.urls import path
from . import views

urlpatterns = [
    path('recilist/', views.recipe_list, name='recipe_list'),
]
