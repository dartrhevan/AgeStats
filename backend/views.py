"""
Routes and views for the flask application.
"""
import json
from statistics import Statistics
from datetime import datetime
from flask import render_template
from app import app
from flask import request, make_response, url_for
from manService import ManService

manService = ManService()

def_min = 0
def_max = 110

@app.route('/api/peoples', methods=["POST"])
def save():
    age = 0
    try:
        age = int(request.form['age'])
    except ValueError:
        make_response('{"message":"Incorrect age"}', 400)
    manService.createNewMan(request.form['name'], age)
    if age < def_min or age > def_max:
        return make_response('{"message":"Incorrect age"}', 400)
    return make_response("", 200)


@app.route( '/' )
@app.route( '/people-list' )
@app.route( '/add' )
def root():
    return app.send_static_file('index.html')
    
    
@app.route( '/api/test' )
def test():
    return 'Hello from Fask!'


@app.route('/api/get-peoples',  methods=["POST"])
def people_list():
    max = def_max
    min = def_min
    pattern = request.form['pattern']
    try:
        min = int(request.form['min'])
        max = int(request.form['max'])
    except ValueError:
        return make_response('{"message":"Incorrect params"}', 400)
    people = manService.getPeople(min, max, pattern)
    stats = Statistics([m['age'] for m in people])
    return json.dumps({'people': people, 'statistics': { 'average': stats.get_avg(), 
                       'dispersion': stats.get_dispersion(), 'deviation': stats.get_avg_deviation(), 'median': stats.get_median()}})

@app.route('/api/peoples/<id>',  methods=["DELETE"])
def remove(id):
    manService.removeMan(id)
    return people_list()

@app.route('/api/peoples',  methods=["PUT"])
def update(): 
    id = None
    age = None
    name = request.form['name']
    try:
        id = int(request.form['id'])
        age = int(request.form['age'])
    except ValueError:
        return make_response('{"message":"Incorrect params"}', 400)
    if manService.editMan(id, age, name):
        return make_response('{"message":"Incorrect params"}', 400)
    return people_list()
