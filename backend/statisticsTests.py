import unittest
from math import sqrt
from statistics import Statistics
from datetime import datetime
import time

testData = [ 9, 4, 5, 7]

class StatisticsTests(unittest.TestCase):
    def test_avg(self):
        stat = Statistics(testData)
        self.assertEqual(stat.avg, 6.25, "Averange")

    def test_variance(self):
        stat = Statistics(testData)
        self.assertEqual(stat.dispersion, 3.6875, "Variance")

    def test_deviation(self):
        stat = Statistics(testData)
        self.assertEqual(stat.avg_deviation, sqrt(3.6875), "Deviation")

    def test_even_median(self):        
        stat = Statistics(testData)
        self.assertEqual(stat.median, 6, "Even median")

    def test_odd_median(self):
        stat = Statistics([9, 4, 5, 8, 7])
        self.assertEqual(stat.median, 7, "Odd median")

    def test_empty_data(self):
        stat = Statistics([])
        self.assertEqual(stat.median, 0, "Median deffault value")
        self.assertEqual(stat.avg_deviation, 0, "Deviation deffault value")
        self.assertEqual(stat.dispersion, 0, "Variance deffault value")
        self.assertEqual(stat.avg, 0, "Averange deffault value")

    @staticmethod
    def meassure_execution_time(func):
        start = int(round(time.time() * 1000)) 
        func()
        return int(round(time.time() * 1000)) - start

    def test_property_is_lazy(self):
        data = [ 9, 4, 5, 7, 78, 64, 678, 7, 2, 0, 7, 5, 1, 1.2, 7.3, 2.6, 7.5, 8, 87 ]
        t1 = 0
        t2 = 0
        n = 100
        for i in range(1, n):
            stat = Statistics(data)
            t1 += StatisticsTests.meassure_execution_time(lambda: stat.dispersion)
            t2 += StatisticsTests.meassure_execution_time(lambda: stat.dispersion)
        self.assertLess(t2 / n, t1 /n)
    
if __name__ == '__main__':
    unittest.main()
