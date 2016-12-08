from django.conf.urls import url
from views import index, create, destroy

urlpatterns = [
    url(r'^$', index, name="integration_index"),
 
]