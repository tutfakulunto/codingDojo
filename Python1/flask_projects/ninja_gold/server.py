from flask import Flask, request, render_template, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'secret key'

@app.route('/')
def index():
    try:
        session['gold']
    except:
        session['gold'] = 0
    try:
        session['comments']
    except:
        session['comments'] = [{'style': 'white', 'comment': 'Welcome to Ninja Gold'}]
    return render_template('index.html')

@app.route('/process_money', methods = ['POST'])
def create_money():
    random_money = lambda x,y:random.randrange(x,y)
    data = {'farm':random_money(10,15), 'cave':random_money(10,20), 'house':random_money(5,10), 'casino':random_money(-50,50)}
    try:
        request.form['building']
        session['gold'] += data[request.form['building']]
        if data[request.form['building']] > 0:
            style = 'gained'
        else:
            style = 'lost'
        session['comments'].append({'style':style, 'comment':"You entered the {} and {} {} gold.".format(request.form['building'], style, data[request.form['building']])})
    except:
        print 'fail'
    return redirect('/')

@app.route('/reset')
def reset():
    session.pop('gold')
    session.pop('comments')
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)