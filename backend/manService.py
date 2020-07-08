
from man import Man

class ManService:
    """Class to operate with db"""
    def createNewMan(self, name, age):
        return Man.create(name=name, age=age)

    def getPeople(self, min, max, pattern):
        peopleData = Man.select().where(Man.age.between(min, max) & (pattern == '' or Man.name.contains(pattern)))
        return [{"name": m.name, "age": m.age, "id": m.id } for m in peopleData]

    def removeMan(self, id):
        entity = Man.get(Man.id == id)
        entity.delete_instance()

    def editMan(self, id, age, name):
        return Man.update({Man.age: age, Man.name: name}).where(Man.id == id).execute() != 1

