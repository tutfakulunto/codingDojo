function VehicleConstructor(name, number_of_wheels, number_of_passengers, speed) {
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function() {
    distance_travelled += this.speed;
  }

  this.name = name;
  this.number_of_wheels = number_of_wheels;
  this.number_of_passengers = number_of_passengers;
  this.speed = speed;
  this.makeNoise = function(noise){
      console.log(noise);
  }
  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkMiles = function() {
    console.log(distance_travelled);
  }
}

var bike = new VehicleConstructor("Bike", 2, 1, 15);
bike.makeNoise = function() {
  console.log("Ring ring!");
}
bike.makeNoise();


var sedan = new VehicleConstructor("Sedan", 4, 5, 50);
sedan.makeNoise("Honk honk!");

var bus = new VehicleConstructor("Bus", 8, 50, 40);
bus.pick_up_passengers = function(picked_up_passengers) {
  this.number_of_passengers += picked_up_passengers;
}
bus.pick_up_passengers(10);
bus.makeNoise("Beep beep!");