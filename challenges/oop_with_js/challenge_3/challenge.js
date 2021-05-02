'use strict';
// parent
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 20;
	console.log(`Car is now running at ${this.speed} km/hr`);
};

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(
		`Applying brakes. Car is now running at ${Math.trunc(this.speed)} km/h`
	);
};

//child
const ElectricCar = function (make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
};

// linkig prototypes
ElectricCar.prototype = Object.create(Car.prototype);

const e1 = new ElectricCar('Ford', 100, 30);
console.log(e1); // ElectricCar {make: "Ford", speed: 100, charge: 30}

// 2. charge method
ElectricCar.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
	this.speed += 20;
	this.charge--;
	console.log(
		`Car is now running at ${this.speed} km/hr with charge of ${this.charge}%`
	);
};

e1.chargeBattery(50);
console.log(e1); // ElectricCar {make: "Ford", speed: 100, charge: 50}

e1.accelerate(); // Car is now running at 120 km/hr with charge of 49%
