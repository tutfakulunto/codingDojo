from django.conf.urls import url
from views import index, login, register, success, logout

urlpatterns = [
    url(r'^$', index, name='login_reg_index'),
    url(r'^login$', login, name='login_reg_login'),
    url(r'^register$', register, name='login_reg_register'),
    url(r'^success$', success, name='login_reg_success'),
    url(r'^logout$', logout, name='login_reg_logout'),
]