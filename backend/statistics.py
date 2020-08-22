from math import sqrt


class Statistics:

    def __get_sum(self):
        if self.__sum == -1:
            self.__sum = sum(self.__data)
        return self.__sum

    @property
    def avg(self):
        if len(self.__data) == 0:
            return 0
        elif self.__avg == -1:
            self.__avg = self.__get_sum() / len(self.__data)
        return self.__avg

    @property
    def data(self):
        return self.__data

    @property
    def dispersion(self):
        if len(self.__data) == 0:
            return 0
        elif self.__disp == -1:
            self.__disp = sum([i**2 for i in self.__data])  / len(self.__data) - self.avg ** 2
        return self.__disp

    @property
    def median(self):
        count = len(self.__data)
        if count == 0:
            return 0
        elif count % 2:
            return self.__data[int(count / 2)]
        else:            
            return (self.__data[int(count / 2)] + self.__data[int(count / 2) - 1]) / 2

    @property
    def avg_deviation(self):
        if len(self.__data) == 0:
            return 0
        elif self.__div == -1:
            self.__div = sqrt(self.dispersion)
        return self.__div

    @property
    def data(self):
        return data

    @data.setter
    def data(self, data):
        if type(data) != list:
            raise ValueError()
        data.sort()
        self.__data = data       
        self.__avg = -1
        self.__disp = -1
        self.__div = -1
        self.__sum = -1   

    def __init__(self, data):
        self.data = data