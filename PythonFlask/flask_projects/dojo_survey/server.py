from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'very secret'

@app.route('/')
def index():
    return render_template('new.html')

@app.route('/create', methods = ['POST'])
def create():
    data = request.form
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
    if len(request.form['comments']) <1:
        flash("Comments cannot be empty!")
    elif len(request.form['comments']) > 120:
        flash("Comments cannot exceed 120 characters in length!")
    else:
        flash("Success. Your name is {}".format(request.form['name']))
    print data
    return render_template('show.html', data=data)

if __name__ == "__main__":
    app.run(debug=True)