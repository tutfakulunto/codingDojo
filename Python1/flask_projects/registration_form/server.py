from flask import Flask, render_template, request, redirect, session, flash
import re
import datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
PASSWORD = re.compile(r'.*?[A-Z]+.*?[0-9]+|.*?[0-9]+.*?[A-Z]')
app = Flask(__name__)
app.secret_key = 'very secret'

@app.route('/')
def index():
    return render_template('register.html')

@app.route('/register', methods = ['POST'])
def register():
    print request.form
    data = request.form
    d = datetime.datetime.strptime
    errors = {}
    # d.strftime("%d/%m/%y")
    try:
        d(data['birthday'], "%m/%d/%Y")
        if d(data['birthday'], "%m/%d/%Y") >= datetime.datetime.today():
            errors['birthday'] = "You have created a temporal paradox, since you haven't been born yet."
    except:
        errors['birthday'] = 'Not a valid birthday'

    if len(data['first_name']) < 1:
        errors['first_name'] = 'You must enter a first name'
    if len(data['last_name']) < 1:
        errors['last_name'] = 'You must enter a last name'
    if len(data['email']) < 1:
        errors['email'] = 'You must enter an email address'

    elif not EMAIL_REGEX.match(data['email']):
        errors['email'] = 'You must enter a valid email address'

    if len(data['password']) < 7:
        errors['password'] = 'Password must contain at least 8 characters'
    elif not PASSWORD.match(data['password']):
        errors['password'] = 'Password must contain one capital letter and one number'

    if not data['password'] == data['confirm_password']:
        errors['confirm_password'] = 'Password must match password confirmation'
    if len(errors) > 0:
        flash(errors)
        return redirect('/')
    return render_template('show.html')

if __name__ == "__main__":
    app.run(debug=True)