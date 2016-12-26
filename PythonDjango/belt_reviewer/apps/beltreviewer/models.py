from __future__ import unicode_literals
from ..login_registration.models import User
from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=100)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey('Author')
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

class ReviewManager(models.Manager):
    def create_review(self, form_data, user_id):
        try:
            book = self.fetch_book(form_data)
            user = User.objects.get(id=user_id)
            new_review = Review.objects.create(content=form_data['content'], rating=form_data['rating'], user=user, book=book)
            return (True, new_review)
        except:
            return (False, ["There was a problem creating the review..."])

    def fetch_book(self, form_data):
        try:
            book = Book.objects.get(id=form_data['book_id'])
        except:
            author = self.fetch_author(form_data)
            book = Book.objects.create(title=form_data['new_book'], author=author)
        return book

    def fetch_author(self, form_data):
        try:
            author = Author.objects.get(id=form_data['author_id'])
        except:
            author = Author.objects.create(name=form_data['new_author'])
        return author

    def fetch_recent(self):
        return Review.objects.all().order_by('created_at')[:3]

class Review(models.Model):
    content = models.TextField()
    rating = models.IntegerField()
    user = models.ForeignKey('login_registration.User')
    book = models.ForeignKey('Book', default=1)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = ReviewManager()