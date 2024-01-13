from django.shortcuts import render
from django.contrib.auth import 

def profile(request):
    return render(request, 'users/profile.html')
