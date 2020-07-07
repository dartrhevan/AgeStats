import psycopg2
from peewee import *

db = PostgresqlDatabase('db1', user='postgres', password='android',
                           host='localhost', port=5432)

db.connect()

class Man(Model):
    id = AutoField()
    name = CharField()
    age = IntegerField()

    class Meta:
        database = db 

manager = SchemaManager(Man, db)

manager.create_table()
