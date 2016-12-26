from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.db.models import Count
import bcrypt, re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def validateReg(self, request):
        errors = self.validate_inputs(request)

        if len(errors) > 0:
            return (False, errors)

        # No errors, time to hash the password
        pw_hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())

        # pw is hashed, time to create new user
        user = self.create(first_name = request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], pw_hash=pw_hash)

        return (True, user)

    def validateLogin(self, request):
        try:
            user = User.objects.get(email=request.POST['email'])
            # The email matched a record in the database, now test passwords
            password = request.POST['password'].encode()
            if bcrypt.hashpw(password, user.pw_hash.encode()):
                return (True, user)

        except ObjectDoesNotExist:
            pass

        return (False, ["Email/password don't match."])

    def validate_inputs(self, request):
        errors = []
        if len(request.POST['first_name']) < 2 or len(request.POST['last_name']) < 2:
            errors.append("Please include a first and/or last name longer than two characters.")
        if not EMAIL_REGEX.match(request.POST['email']):
            errors.append("Please include a valid email.")
        if len(request.POST['password']) < 8 or request.POST['password'] != request.POST['confirm_pw']:
            errors.append("Passwords must match and be at least 8 characters.")

        return errors

    def fetch_user_info(self, id):
        return self.filter(id=id).annotate(total_reviews=Count('review'))[0]

class User(models.Model):
    name = models.CharField(max_length=100)
    alias= models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    pw_hash = models.CharField(max_length=255)

    objects = UserManager()