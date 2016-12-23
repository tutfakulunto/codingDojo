function VehicleConstructor(name, number_of_wheels, number_of_passengers) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.number_of_wheels = number_of_wheels;
  vehicle.number_of_passengers = number_of_passengers;
  vehicle.makeNoise = function(noise){
      console.log(noise);
  };
  return vehicle;
}

var bike = VehicleConstructor("Bike", 2, 1);
bike.makeNoise = function() {
  console.log("Ring ring!");
};
bike.makeNoise();


var sedan = VehicleConstructor("Sedan", 4, 5);
sedan.makeNoise("Honk honk!");

var bus = VehicleConstructor("Bus", 8, 50);
bus.pick_up_passengers = function(picked_up_passengers) {
  this.number_of_passengers += picked_up_passengers;
}
bus.pick_up_passengers(10);
bus.makeNoise("Beep beep!");