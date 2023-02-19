function propertyDecorator(
	classPrototype: any,
	name: string | symbol
): any {
	console.log('------ start property decorator')
	console.log('classPrototype: ', classPrototype)
	console.log('name: ', name)
	console.log('------ end property decorator')

	let myCustomPropertyValue: any
	
	// return a propertyDescriptor		
	// property descriptor must be an object	
	return {
		get: () => myCustomPropertyValue,
		set: (value: any) => {

			// type guargind
			if (typeof value === 'string') {
				myCustomPropertyValue = value
					.split('').reverse().join('')
				return
			}

			myCustomPropertyValue = value
		}
	}
}

export class Person {

	@propertyDecorator
	name: string

	// will raise TypeError: value.split is not a function
	// it occurs in JavaScript runtime
	// then, it is not catched by TypeScipt
	// that's why decorator is an experimental feature
	// we can deal with it by make type guarding
	@propertyDecorator
	age: number

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	greeting(message: string): string {
		return `Hi, my name is ${this.name}. I am ${this.age} years old. ${message}`
	}
}

const person = new Person('Bruno', 26)

const response: string = person.greeting('You are wellcome')
console.log(response)

// Output
/*
	------ start property decorator
	classPrototype:  {}
	name:  name
	------ end property decorator
	------ start property decorator
	classPrototype:  {}
	name:  age
	------ end property decorator
	Hi, my name is onurB. I am 26 years old. You are wellcome
*/