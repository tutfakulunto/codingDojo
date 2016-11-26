from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'very secret'

@app.route('/', methods = ['GET', 'POST'])
def index():
    data = {}
    try:
        session['number']
    except:
        session['number'] = random.randrange(0, 101)

    try:
        print request.form
        guess = int(request.form['guess'])
        if guess == session['number']:
            data = {'event': 'You are correct!'}
            data['coloration'] = 'green'
            data['correct'] = 'true'
        elif guess < session['number']:
            data = {'event':'Your guess was too low.'}
            data['coloration'] = 'blue'
        else:
            data = {'event':'Your guess was too high.'}
            data['coloration'] = 'red'
        data['guess'] = str(guess)
        print data
    except:
        data = {'event':'Take a guess!'}
        data['coloration'] = 'white'
        data['guess'] = 'None yet'
        print data

    return render_template('index.html', data = data)

@app.route('/reset', methods = ['GET'])
def reset():
    session['number'] = random.randrange(0, 101)
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)