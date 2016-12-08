from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'ninja_index'),
    url(r'^process_gold$', views.process_gold, name ='ninja_process_gold'),
    url(r'^reset$', views.reset, name="ninja_reset"),
]