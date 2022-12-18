export class Person {
	public firstName: string
	public lastName: string
	private age: number
	protected cpf: string

	constructor(
		firstName: string,
		lastName: string,
		age: number,
		cpf: string
	) {
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
		this.cpf = cpf
	}
 
	getAge(): number {
		return this.age
	}

	getCpf(): string {
		return this.cpf
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`
	}
}

export class Student extends Person {
	getFullName(): string {
		return `It comes from Student: ${this.firstName} ${this.lastName}`
	}
}

export class Client extends Person {
	getFullName(): string {
		return `It comes from Client: ${this.firstName} ${this.lastName}`
	}
}

const person = new Person('Bruno', 'Conde', 7, '000-000-000-00')
const student = new Student('Bruno', 'Conde', 7, '000-000-000-00')
const client = new Client('Bruno', 'Conde', 7, '000-000-000-00')

console.log(person.getFullName())
console.log(student.getFullName())
console.log(client.getFullName())