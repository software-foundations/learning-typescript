type Name = {
	name: string
}

type LastName = {
	lastName: string
}

type FullName = {
	fullName: () => string
}

type PersonType = Name & LastName & FullName

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