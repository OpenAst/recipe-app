from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@permission_classes([AllowAny])
def user_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(request, email=email, password=password)
    
    if user is not None:
        login(request, user)
        return JsonResponse({'message': 'Login successful'})
    else:
        return JsonResponse({'message': 'Invalid credentials'}, status=400)
    
@login_required
def profile(request):
    return render(request, 'users/profile.html')
    

