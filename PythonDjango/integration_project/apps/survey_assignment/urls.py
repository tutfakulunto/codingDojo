from django.conf.urls import url
from . import views

urlpatterns = {
    url(r'^$', views.index, name="survey_index"),
    url(r'^surveys/process$', views.process, name="survey_process")
}