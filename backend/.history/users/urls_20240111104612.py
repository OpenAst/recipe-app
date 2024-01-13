from django.urls import path
from . import views

urlpatterns = [
    path('users/profile/', views.profile, name='profile'),
]