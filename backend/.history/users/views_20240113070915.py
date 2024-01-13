from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse

def profile(request):
    return render(request, 'users/profile.html')
