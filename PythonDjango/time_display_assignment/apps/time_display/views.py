from django.shortcuts import render, HttpResponse
from time import strftime
from datetime import datetime

def index(request):
    context = {
    "currentDateTime":str(datetime.now().strftime('%b %d, %Y, %I %M %p'))
    }
    return render(request, 'time_display/index.html', context)