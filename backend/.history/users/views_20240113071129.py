from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.deorators import api_view, pers

def profile(request):
    return render(request, 'users/profile.html')
