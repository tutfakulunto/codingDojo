from django.shortcuts import render, redirect
from django.urls import reverse
from models import Book, Author, Review
from ..login_registration.views import print_messages
from ..login_registration.models import User

# Create your views here.
from django.template import Library
register = Library()

def check_logged_in(request):
    return 'user' in request.session

def index(request):
    if not check_logged_in(request):
        return redirect(reverse('login_reg:index'))

    context = {
        'reviews': Review.objects.fetch_recent(),
        'books': Book.objects.all()
    }

    return render(request, 'beltreviewer/index.html', context)

def new(request):
    if not check_logged_in(request):
        return redirect(reverse('login_reg:index'))

    result = Review.objects.create_review(request.POST, request.session['user']['id'])

    if result[0] == True:
        return redirect(reverse('reviewer:show', kwargs={'id': result[1].book.id}))
    else:
        print_messages(request, result[1])
        return redirect(reverse('reviewer:new'))

def create(request):
    if not check_logged_in(request):
        return redirect(reverse('users:index'))

    result = Review.objects.create_review(request.POST, request.session['user']['id'])

    if result[0] == True:
        return redirect(reverse('reviews:show', kwargs={'id': result[1].book.id }))
    else:
        print_messages(request, result[1])
        return redirect(reverse('reviews:new'))

@register.filter
def show(request, id):
    if not check_logged_in(request):
        return redirect(reverse('login_reg:index'))

    book = Book.objects.get(id=id)
    return render(request, 'beltreviewer/show.html', { 'book' : book })

@register.filter
def show_user(request, id):
    if not check_logged_in(request):
        return redirect(reverse('login_reg:index'))

    user = User.objects.fetch_user_info(id)
    return render(request, 'beltreviewer/show_user.html', { 'user' : user })