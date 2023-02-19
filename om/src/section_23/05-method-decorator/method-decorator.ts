export function decorator(
	classPrototype: any,
	methodName: string,
	propertyDescriptor: PropertyDescriptor
): any {
	console.log('classPrototype:', classPrototype)
	console.log('methodName:', methodName)
	console.log('propertyDescriptor:', propertyDescriptor)
	return {
		writable: false
	}
}


export class Person {
	name: string
	age: number

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	@decorator
	greeting(): string {
		return `Hi, my name is ${this.name}. I am ${this.age} years old`
	}
}

const person = new Person('Bruno', 26)

// person.greeting = () => 'Heeeeey'

// We can do that because the method is writable by default
// by setting 'writable: false', js (not ts. Is is one of the reasons it is experimental) doesn't leave us do that anymore

const response: string = person.greeting()
console.log(response)

// classPrototype: {}
// methodName: greeting
// propertyDescriptor: {
//   value: [Function: greeting],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }
// Hi, my name is Bruno. I am 26 years old