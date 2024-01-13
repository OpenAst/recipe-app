from django.shortcuts import render
from django.contrib

def profile(request):
    return render(request, 'users/profile.html')
