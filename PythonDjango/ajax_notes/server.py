from flask import Flask,render_template,redirect,request,jsonify
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app,'ajaxNotes')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/notes')
def select():
    query = "SELECT * FROM notes"
    notes = mysql.query_db(query)
    return render_template('partials/notes.html',notes = notes)

@app.route('/notes/create', methods=['POST'])
def create():
    query = "INSERT INTO notes(title,created_at,updated_at) VALUES('{}', NOW(), NOW())".format(request.form['title'])
    mysql.query_db(query)
    return redirect('/notes')

@app.route('/notes/<id>/update',methods=['POST'])
def update(id):
    query = "UPDATE notes SET description = :description,updated_at = NOW() WHERE id = :id"
    data = {
        'id' : id,
        'description' : request.form['description']
    }   
    mysql.query_db(query,data)
    return redirect('/notes')

@app.route('/notes/<id>/delete',methods=['POST'])
def delete(id):
    query = "DELETE FROM notes WHERE id = :id"
    data = { 'id' : id }
    mysql.query_db(query,data)
    return redirect('/notes')

app.run(debug = True)