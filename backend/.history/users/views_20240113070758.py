from django.shortcuts import render
from django

def profile(request):
    return render(request, 'users/profile.html')
