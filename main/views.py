from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.

def index(request):
  return render(request, 'main/index.html')
  
def about(request):
  return render(request, 'main/about.html');

def contact(request):
  return render(request, 'main/contact.html')

  
@api_view(["GET"])
def image_list(request):
  images = SlideImage.objects.all().order_by('id')
  serializer = SlideImageSerializer(images, many=True)
  return Response(serializer.data)
