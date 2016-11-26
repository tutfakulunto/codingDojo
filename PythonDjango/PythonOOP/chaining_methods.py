class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def display_info(self):
        print "Price is $" + str(self.price)
        print "Max speed: " + str(self.max_speed) + "mph"
        print "Total miles: " + str(self.miles) + " miles"
        return self

    def ride(self):
        print "Riding"
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing"
        if self.miles >= 5:
            self.miles -= 5
        return self

    trek_Domane_SLR9 = Bike(10000.00, 30)
    trek_Domane_SLR9.ride().ride().ride().reverse().display_info()

    cannondale = Bike(5000.00, 20)
    cannondale.ride().ride().reverse().reverse().display_info()

    schwinn = Bike(199.99, 15)
    schwinn.reverse().reverse().reverse().display_info()