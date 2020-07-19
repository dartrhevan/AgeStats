from math import sqrt


class Statistics:

    def __get_sum(self):
        if self.__sum == -1:
            self.__sum = sum(self.__data)
        return self.__sum

    def get_avg(self):
        if len(self.__data) == 0:
            return 0
        elif self.__avg == -1:
            self.__avg = self.__get_sum() / len(self.__data)
        return self.__avg

    def get_data(self):
        return self.__data

    def get_dispersion(self):
        if len(self.__data) == 0:
            return 0
        elif self.__disp == -1:
            self.__disp = sum([i**2 for i in self.__data])  / len(self.__data) - self.get_avg() ** 2
        return self.__disp

    def get_median(self):
        count = len(self.__data)
        if count == 0:
            return 0
        elif count % 2:
            return self.__data[int(count / 2)]
        else:            
            return (self.__data[int(count / 2)] + self.__data[int(count / 2) - 1]) / 2

    def get_avg_deviation(self):
        if len(self.__data) == 0:
            return 0
        elif self.__div == -1:
            self.__div = sqrt(self.get_dispersion())
        return self.__div


    def __init__(self, data):
        data.sort()
        self.__data = data      
        self.__avg = -1
        self.__disp = -1
        self.__div = -1
        self.__sum = -1