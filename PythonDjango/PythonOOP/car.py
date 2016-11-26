class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = .15
        else:
            self.tax = .12
        self.display_all()

    def display_all(self):
        print "Price: $" + str(self.price)
        print "Speed: " + str(self.speed) + "mph"
        print "Fuel: " + str(self.fuel)
        print "Mileage: " + str(self.mileage) + "mpg"
        print "Tax: " + str(self.tax)

    bmw = Car(80000, 80, "Full", 25)
    tesla = Car(100000, 100, "Charged", 150)
    volt = Car(60000, 60, "Charged", 120)
    nissan = Car(30000, 60, "Not full", 40)
    koenigsegg = Car(1000000, 200, "Empty", 25)
    pinto = Car(12000, 40, "Full", 15)