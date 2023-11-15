from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.html import mark_safe
from PIL import Image as Image_tool

# Create your models here.
class User(AbstractUser): 
  pass

class SlideImage(models.Model):
  name = models.CharField(max_length=100, null=True)
  src = models.ImageField(blank=False, null=False)
  
  def save(self, *args, **kwargs):
    super().save(*args, **kwargs)
    self.crop_image_to_square()
  
  def crop_image_to_square(self):
    og_path = self.src.path
    cropped_path = og_path
    
    crop_to_square(og_path, cropped_path)
  
  @property
  def img_preview(self):
    if (self.src):
      return mark_safe('<img src="{}" width="500" height="auto" />'.format(self.src.url))
    return ""
  
  @property
  def list_img_preview(self):
    if (self.src):
      return mark_safe('<img src="{}" width="65" height="auto"/>'.format(self.src.url))
    return ""
  
  
  def __str__(self):
    return self.name
  
  
  
def crop_to_square(image_path, output_path):
  img = Image_tool.open(image_path)

  # Get the original image size
  width, height = img.size
  
  if (width > height):
    reductionWhole = width - height
    reduction = reductionWhole // 2
    
    img_cropped = img.crop((reduction, 0, width - reduction, height))
    
  elif (width < height):
    reductionWhole = height - width
    reduction = reductionWhole // 2
    
    img_cropped = img.crop((0, reduction, width, height - reduction))
  
  # Else the just save image
  else:
    img_cropped = img
    
  img_scaled = img_cropped.resize((1500, 1500))

  # Save the cropped image
  img_scaled.save(output_path)