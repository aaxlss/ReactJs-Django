from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^serverInfo', views.jsonInfo(), name = 'serverInfo'),
    url(r'^$', views.home(), name = 'home'),
]

