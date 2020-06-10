"""
This script runs the application using a development server.
It contains the definition of routes and views for the application.
"""

from flask import Flask
app = Flask(__name__)

# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app

import views
