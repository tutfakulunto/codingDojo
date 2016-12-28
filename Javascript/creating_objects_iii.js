function VehicleConstructor(name, number_of_wheels, number_of_passengers, speed) {
  if (!(this instaceof VehicleConstructor)){
    return new VehicleConstructor(name, number_of_wheels, number_of_passengers, speed);
  }

  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  this.distanceTraveled = 0;
  this.name = name || "unicycle";
  this.number_of_wheels = number_of_wheels || 1;
  this.number_of_passengers = number_of_passengers || 0;
  this.speed = speed;
  this.vin = createVin();

  function createVin() {
    var vin = '';
    for (var i = 0; i < 17; i += 1) {
      vin += chars[Math.floor(Math.random() * 35)];
    }
    return vin;
  }

VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || "Honk honk!";
  console.log(noise);
  return this;
}

VehicleConstructor.prototype.move = function() {
  this.makeNoise();
  this.updateDistanceTraveled();
  return this;
}

VehicleConstructor.prototype.checkMiles = function() {
  console.log(this.distanceTraveled);
  return this;
}

VehicleConstructor.prototype.updateDistanceTraveled = function() {
  this.distanceTraveled += this.speed;
  console.log(this.distanceTraveled);
  return this;
}

var car = new VehicleConstructor('car', 4, 4, 80);

