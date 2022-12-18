export class Person {
	constructor(
		private name: string,
		private lastName: string,
		private age: number,
		// private cpf: string
		private _cpf: string
	) {
		console.log('this.cpf and _cpf', this.cpf, _cpf)
		this.cpf = _cpf
	}

	///////////////////////////////////////////
	// Old way to create getters and setters //
	///////////////////////////////////////////
	setCpf(value: string): void {
		this.cpf = value
	}

	getCpf(): string {
		return this.cpf.replace(/\D/g, '')
	}

	///////////////////////////////////////////
	// New way to create getters and setters //
	///////////////////////////////////////////

	// It acts like a class attribute (it is not a method)
	// It its the reason why we use _cpf instead of cpf
	// We cannot specify a return type in a set
	set cpf(value: string) {
		console.log('Setting cpf')
		this._cpf = value
	}

	get cpf(): string {
		console.log('Getting cpf')
		return this._cpf.replace(/\D/g, '')
	}
}

const person = new Person('Bruno', 'Conde', 14, '000-000-000-00')

console.log(person.cpf)
// person.setCpf('111-111-111-11')

person.cpf = '111-111-111-11'
console.log(person.cpf)