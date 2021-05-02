'use strict';
// parent
class Car {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 10;
		console.log(`Car is now running at ${this.speed} km/hr`);
	}

	brake() {
		this.speed -= 5;
		console.log(
			`Applying brakes. Car is now running at ${Math.trunc(
				this.speed
			)} km/h`
		);
	}
}

//child
class ElectricCar extends Car {
	constructor(make, speed, charge) {
		super(make, speed);
		this.charge = charge;
	}

	chargeBattery(chargeTo) {
		this.charge = chargeTo;
	}
}

const c1 = new ElectricCar('tesla', 120, 90);
console.log(c1); // ElectricCar {make: "tesla", speed: 120, charge: 90}
c1.accelerate(); // Car is now running at 130 km/hr
c1.brake(); // Applying brakes. Car is now running at 125 km/h
