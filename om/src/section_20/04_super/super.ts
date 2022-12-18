export class Person {
	constructor(
		public firstName: string,
		public lastName: string,
		private age: number,
		protected cpf: string
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
	constructor(
		firstName: string,
		lastName: string,
		age: number,
		cpf: string,
		public classroom: string
		) {
		super(firstName, lastName, age, cpf)
		this.classroom = classroom
	}

	getFullName(): string {
		console.log('Before super calls')
		const result = super.getFullName()
		return result + '!!!!!'
	}
}

export class Client extends Person {
	getFullName(): string {
		return `It comes from Client: ${this.firstName} ${this.lastName}`
	}
}

const person = new Person('Bruno', 'Conde', 7, '000-000-000-00')
const student = new Student('Bruno', 'Conde', 7, '000-000-000-00', '301-A')
const client = new Client('Bruno', 'Conde', 7, '000-000-000-00')

console.log(person.getFullName())
console.log(student)
console.log(client.getFullName())