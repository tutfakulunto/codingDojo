var mylib = require('./mathlib');
var math = new mylib();

a = 1;
b = 35;

console.log("The sum of " + a + "and" + b + " is:", math.add(a, b));
console.log("The product of " + a + "and" + b + " is:", math.multiply(a, b));
console.log("The square of " + a + " is: ", math.square(a));
console.log("A random number between " + a + " and " + b + ": ", math.random(a, b));