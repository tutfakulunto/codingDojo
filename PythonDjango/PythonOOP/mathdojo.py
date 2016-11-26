# Part I
class MathDojo(object):
    def __init__(self):
        self.summed = 0
    def add(self, *numbers):
        for x in numbers:
            self.summed += x
        return self
    def result(self):
        print(self.summed)

md = MathDojo()
md.add(2).add(2, 5).subtract(3, 2).result()

# Part II
class MathDojo2(object):
    def __init__(self):
        self.summed = 0
    def add(self, *args, **kwargs):
        for x in args:
            if type(x) is list:
                for i in x:
                    self.summed += i
            for x in args:
                if type(x) is int:
                    self.summed += x
            return self
    def subtract(self, *args, **kwargs):
        for x in args:
            if type(x) is list:
                for i in x:
                    self.summed -= i
        for x in args:
            if type(x) is int:
                self.summed -= x
        return self
    def result(self):
        print(self.summed)

md2 = MathDojo2()
md2.add([1], 3, 4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result()

# Part III
class MathDojo3(object):
    def __init__(self):
        self.summed = 0
    def add(self, *args, **kwargs)
        for x in args:
            if type(x) is int:
                self.summed += x
        for x in args:
            if type(x) is list:
                for i in x:
                    self.summed += i
        for x in args:
            if type(x) is tuple:
                for i in x:
                    self.summed += i
        return self
    def subtract(self, *args, **kwargs):
        for x in args:
            if type(x) is int:
                self.summed -= x
        for x in args:
            if type(x) is list:
                for i in x:
                    self.summed -= i
        for x in args:
            if type(x) is tuple:
                for i in x:
                    self.summed -= i
        return self
    def result(self):
        print(self.summed)
md3 = MathDojo3()
tup = (1,3,4)
md3.add(tup, [1, 2, 3], 9, 8, 10).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result()