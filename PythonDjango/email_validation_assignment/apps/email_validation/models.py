from __future__ import unicode_literals

from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

# Create your models here.
class EmailManager(models.Manager):
    def register(self, email):
        errors = []
        if len(email) == 0:
            errors.append("Email is required")
        elif not EMAIL_REGEX.match(email):
            errors.append("Invalid Email")
        if len(errors) is not 0:
            return (False, errors)
        else:
            e = Email.emailMgr.create(email=email)
            e.save()
            return (True, e)

    def destroy(self, id):
        e = Email.emailMgr.get(id=id)
        if not e:
            return (False, "No email found with that Id")
        else:
            e.delete()
            return (True, "Email deleted")

class Email(models.Model):
    email = models.CharField(max_length = 100)
    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateField(auto_now = True)
    emailMgr = EmailManager()