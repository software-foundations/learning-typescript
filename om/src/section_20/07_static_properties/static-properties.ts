export class Person {

	static defaultAge = 0
	static defaultCpf = '000-000-000-00'

	constructor(
		public name: string,
		public lastName: string,
		public age: number,
		public cpf: string
	) {}

	someMethod(): void {
		console.log(Person.defaultAge, Person.defaultCpf)
	}

	static sayHello(): void {
		console.log('Hello, world')
	}

	// See factory method (GoF)
	static createPerson(name: string, lastName: string): Person {
		return new Person(
			name,
			lastName,
			Person.defaultAge,
			Person.defaultCpf)
	}

}

Person.sayHello()
const person = Person.createPerson('Bruno', 'Conde')
const person2 = new Person('Bruno', 'Conde', 0, '000-000-000-00')
console.log(person)
console.log(person2)

person.someMethod()
console.log(Person.defaultAge, Person.defaultCpf)
