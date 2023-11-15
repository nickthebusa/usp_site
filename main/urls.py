from django.urls import path

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('image-list', views.image_list, name='image-list')
]
