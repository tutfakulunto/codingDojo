class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def display_info(self):
        print "Price is $" + str(self.price)
        print "Max speed: " + str(self.max_speed) + "mph"
        print "Total miles: " + str(self.miles) + " miles"

    def ride(self):
        print "Driving"
        self.miles += 10

    def reverse(self):
        print "Reversing"
        if self.miles >= 5:
            self.miles -= 5

    trek_Domane_SLR9 = Bike(10000.00, 30)
    trek_Domane_SLR9.ride()
    trek_Domane_SLR9.ride()
    trek_Domane_SLR9.ride()
    trek_Domane_SLR9.reverse()
    trek_Domane_SLR9.display_info()

    cannondale = Bike(5000.00, 20)
    cannondale.ride()
    cannondale.ride()
    cannondale.reverse()
    cannondale.reverse()
    cannondale.display_info()

    schwinn = Bike(199.99, 15)
    schwinn.reverse()
    schwinn.reverse()
    schwinn.reverse()
    schwinn.display_info()