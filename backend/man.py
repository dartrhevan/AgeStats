import psycopg2
from peewee import *

db = PostgresqlDatabase('df1l02ot2efhoq', user='vkchdnyznevakr', 
                        password='c94c2db215ab2f11d76ffec02a9dea3d101592fea4028eee9dd41d9e9a35ce09',
                           host='ec2-34-224-229-81.compute-1.amazonaws.com', port=5432)

db.connect()

class Man(Model):
    id = AutoField()
    name = CharField()
    age = IntegerField()

    class Meta:
        database = db 

manager = SchemaManager(Man, db)

manager.create_table()
