from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'ninjas/index.html')

def show(request, ninja_color):
    turtles = {
        'red': 'ninjas/raphael.jpg',
        'blue': 'ninjas/leonardo.jpg',
        'orange': 'ninjas/michaelangelo.jpg',
        'purple': 'ninjas/donatello.jpg'
    }
    if ninja_color in turtles:
        context = {
            'image': turtles[ninja_color]
        }
    else:
        context = {
            'image': 'ninjas/april.jpg'
        }
    return render(request, 'ninjas/index.html', context)