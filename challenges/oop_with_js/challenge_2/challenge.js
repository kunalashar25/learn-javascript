'use strict';

class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}

	accelerate() {
		this.speedUS += 10;
		console.log(`Car is now running at ${this.speed} km/hr`);
	}

	brake() {
		this.speedUS -= 5;
		console.log(
			`Applying brakes. Car is now running at ${Math.trunc(
				this.speed
			)} km/h`
		);
	}
}

const c1 = new CarCl(1990, 75);
console.log(c1.speedUS); // 46.875

c1.accelerate(); // Car is now running at 91 km/hr
c1.brake(); // Applying brakes. Car is now running at 83 km/hs
