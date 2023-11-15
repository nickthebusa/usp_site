from rest_framework import serializers
from .models import *

class SlideImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = SlideImage
    fields = "__all__"