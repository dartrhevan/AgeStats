"""
Routes and views for the flask application.
"""
import json
from statistics import Statistics
from datetime import datetime
from flask import render_template
from app import app
from flask import request, make_response
from man import Man

def_min = 0
def_max = 110

@app.route('/api/save', methods=["POST"])
def save():
    age = 0
    print(request.form['name'])
    print(request.form['age'])
    try:
        age = int(request.form['age'])
    except ValueError:
        make_response('{"message":"Incorrect age"}', 400)
    obj = Man.create(name=request.form['name'], age = age)
    if age < def_min or age > def_max:
        return make_response('{"message":"Incorrect age"}', 400)
    return make_response("", 200)

@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/api/test')
def test():
    return "Hi!"

@app.route('/api/people-list',  methods=["POST"])
def people_list():
    max = def_max
    min = def_min
    pattern = request.form['pattern']
    try:
        min = int(request.form['min'])
        max = int(request.form['max'])
    except ValueError:
        return make_response('{"message":"Incorrect params"}', 400)
    print(min)
    #Man.age.between(min, max)
    peopleData = Man.select().where(Man.age.between(min, max) & (pattern == '' or Man.name.contains(pattern)))
    people = [{"name": m.name, "age": m.age} for m in peopleData]
    stats = Statistics([m['age'] for m in people])
    return json.dumps({'people': people, 'statistics': { 'average': stats.get_avg(), 
                       'dispersion': stats.get_dispersion(), 'deviation': stats.get_avg_deviation(), 'mode': stats.get_mode()}})

