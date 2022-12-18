interface Name {
	name: string
}

interface LastName {
	lastName: string
}

interface FullName {
	fullName: () => string
}

interface PersonType extends Name, LastName, FullName {}

export class Person implements PersonType {
	constructor(
		public name: string,
		public lastName: string
	) {}

	// we can change the access modifier in the concrete property
	fullName(): string {
		return `${this.name} ${this.lastName}`
	}
}

const person = new Person('Bruno', 'Conde')

console.log(person.fullName())

// remember structural typing in typescript

const person2: PersonType = {
	name: 'Bruno',
	lastName: 'Conde',
	fullName() {
		return `${this.name} ${this.lastName}`
	}
}

console.log(person2.fullName())