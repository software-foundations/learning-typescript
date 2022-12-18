export class Car {
	private readonly motor: Motor = new Motor()

	turnOn(): void {
		this.motor.turnOn()
	}

	accelerate(): void {
		this.motor.accelerate()
	}

	stop(): void {
		this.motor.stop()
	}

	turnOff(): void {
		this.motor.turnOff()
	}
}

export class Motor {
	turnOn(): void {
		console.log('Motor in on')
	}

	accelerate(): void {
		console.log('Motor is accelerate')
	}

	stop(): void {
		console.log('Motor stopped')
	}

	turnOff(): void {
		console.log('Motor is off')
	}
}

const car = new Car()

car.turnOn()
car.accelerate()
car.stop()
car.turnOff()