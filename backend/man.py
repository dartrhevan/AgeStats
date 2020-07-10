import psycopg2
from peewee import *
import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)
    

db = PostgresqlDatabase(os.environ.get("DATABASE_NAME"), user = os.environ.get("DATABASE_USER"), 
     password = os.environ.get('DATABASE_PASSWORD'), host = os.environ.get("DATABASE_HOST"), port=5432)

db.connect()

class Man(Model):
    id = AutoField()
    name = CharField()
    age = IntegerField()

    class Meta:
        database = db 

manager = SchemaManager(Man, db)

manager.create_table()
