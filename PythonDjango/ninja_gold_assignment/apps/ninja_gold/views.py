from django.shortcuts import render, redirect
from random import randint
from datetime import datetime

# Create your views here.
def index(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0
    return render(request, 'ninja_gold/index.html')

def process_gold(request):
    location = request.POST['location']

    if location == 'farm':
        reward = randint(10, 20)
        message = "Earned {r} gold coins from {l}.\n".format(r=reward, l=location)

    if location == 'cave':
        reward = randint(5, 10)
        message = "Earned {r} gold coins from {l}.\n".format(r=reward, l=location)

    if location == 'house':
        reward = randint(2, 5)
        message = "Earned {r} gold coins from {l}.\n".format(r=reward, l=location)

    if location == 'casino':
        reward = randint(-50, 50)
        message = "Earned {r} gold coins from {l}.\n".format(r=reward, l=location)
        if reward < 0:
            message = "Lost {r} gold coins gambling at a casino.".format(r=reward)

    request.session['gold'] += reward
    request.session['message'] = message

    return redirect('/')

def reset(request):
    for key in request.session.keys():
        del request.session[key]

    request.session['gold'] = 0

    return redirect('/')
