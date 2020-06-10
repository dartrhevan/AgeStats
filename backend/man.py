import psycopg2
from peewee import *

db = PostgresqlDatabase('db1', user='postgres', password='android',
                           host='localhost', port=5432)

db.connect()

class Man(Model):
    id = AutoField()
    name = CharField()
    age = IntegerField()
    #def get_name(self):
    #   return self.__name
    #def get_age(self):
    #    return self.__age

    class Meta:
        database = db 

manager = SchemaManager(Man, db)

manager.create_table()
