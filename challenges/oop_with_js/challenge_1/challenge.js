'use strict';

// 1. create Car function
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

const c1 = new Car(2003, 120.8);
console.log(c1); // Car {make: 2003, speed: 120.8}

// 2. Accelerate the car
Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`Car is now running at ${this.speed} km/hr`);
};

c1.accelerate(); // Car is now running at 130.8 km/hr

// 3. Apply brakes
Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(
		`Applying brakes. Car is now running at ${Math.trunc(this.speed)} km/h`
	);
};

c1.brake(); // Applying brakes. Car is now running at 125 km/h
