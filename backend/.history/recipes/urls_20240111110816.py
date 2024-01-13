from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.recipe_list, name='recipe_list'),
]
