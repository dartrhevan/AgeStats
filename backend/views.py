"""
Routes and views for the flask application.
"""
import json
from datetime import datetime
from flask import render_template
from app import app
from flask import request, make_response
from man import Man


@app.route('/save', methods=["POST"])
def save():
    print(request.form['name'])
    obj = Man.create(name=request.form['name'], age=request.form['age'])
    #obj.save()
    return make_response("", 200)

@app.route('/')
def hello():
    """Renders a sample page."""
    return "Hello World!"


@app.route('/people-list')
def people_list():
    people = Man.select()
    #print([{"name": m.name, "age": m.age} for m in people])
    return json.dumps([{"name": m.name, "age": m.age} for m in people])

