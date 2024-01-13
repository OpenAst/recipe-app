from django.shortcuts import render
from django.contrib.auth import authenticate, login
from 

def profile(request):
    return render(request, 'users/profile.html')
