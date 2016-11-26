from django.shortcuts import render, HttpResponse
from datetime import datetime

# Create your views here.
def index(request):
    i = datetime.datetime.now()
    currentDateTime = ("%s/%s/%s" % (i.day,i.month,i.year)) + ("%s:%s:%s" % (i.hour,i.month,i.second))

    context = {
    "currentDateTime":currentDateTime
    }
    return render(request, 'timedisplay/index.html', context)