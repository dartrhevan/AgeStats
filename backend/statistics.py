
class Statistics:
    def __init__(self, data):
        data.sort()
        self.__data = data#.sort()
        self.__sum = sum(data)
        self.__avg = self.__sum / len(self.__data)
        self.__disp = sum([i**2 for i in self.__data]) - self.__avg ** 2
        self.__div = self.__disp ** 2

    def get_data(self):
        return self.__data

    def get_avg(self):
        return self.__avg

    def get_dispersion(self):
        return self.__disp

    def get_mode(self):
        count = len(self.__data)
        if(count % 2):
            return (self.__data[int(count / 2)] + self.__data[int(count / 2) - 1]) / 2
        else:
            return self.__data[count / 2]

    def get_avg_deviation(self):
        return self.__div
