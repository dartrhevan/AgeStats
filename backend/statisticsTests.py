import unittest
from math import sqrt
from statistics import Statistics

testData = [ 9, 4, 5, 7]

class StatisticsTests(unittest.TestCase):
    def test_avg(self):
        stat = Statistics(testData)
        self.assertEqual(stat.get_avg(), 6.25, "Averange")

    def test_variance(self):
        stat = Statistics(testData)
        self.assertEqual(stat.get_dispersion(), 3.6875, "Variance")

    def test_deviation(self):
        stat = Statistics(testData)
        self.assertEqual(stat.get_avg_deviation(), sqrt(3.6875), "Deviation")

    def test_even_median(self):        
        stat = Statistics(testData)
        self.assertEqual(stat.get_median(), 6, "Even median")

    def test_odd_median(self):
        stat = Statistics([9, 4, 5, 8, 7])
        self.assertEqual(stat.get_median(), 7, "Odd median")

    def test_empty_data(self):
        stat = Statistics([])
        self.assertEqual(stat.get_median(), 0, "Median deffault value")
        self.assertEqual(stat.get_avg_deviation(), 0, "Deviation deffault value")
        self.assertEqual(stat.get_dispersion(), 0, "Variance deffault value")
        self.assertEqual(stat.get_avg(), 0, "Averange deffault value")

    
if __name__ == '__main__':
    unittest.main()
