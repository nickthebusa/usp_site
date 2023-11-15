from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

class SlideImageAdmin(admin.ModelAdmin):
  list_display = ('name', 'src', 'list_img_preview')
  readonly_fields = ('img_preview',)
  
  def img_preview(self, obj):
    return obj.img_preview
  def list_img_preview(self, obj):
    return obj.list_img_preview
  
  img_preview.short_description = "SlideImage"
  img_preview.allow_tags = True
  list_img_preview.short_description = "SlideImage"
  list_img_preview.allow_tags = True
  
# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(SlideImage, SlideImageAdmin)