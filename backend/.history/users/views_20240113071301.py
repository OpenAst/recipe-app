from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.deorators import api_view, permission_classes
from rest_framework.permission import AllowAny

@api_view(['POST'])
@permission_classes([AllowAny])
def profile(request):
    return render(request, 'users/profile.html')
