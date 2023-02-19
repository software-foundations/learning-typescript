export function decorator(
	classPrototype: any,
	methodName: string,
	propertyDescriptor: PropertyDescriptor
): any {
	console.log('classPrototype:', classPrototype)
	console.log('methodName:', methodName)
	console.log('propertyDescriptor:', propertyDescriptor)
	return {
		value: function (...args: any[]) {
			return args[0].toUpperCase()
		}
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
	greeting(message: string): string {
		return `Hi, my name is ${this.name}. I am ${this.age} years old. ${message}`
	}
}

const person = new Person('Bruno', 26)

// person.greeting = () => 'Heeeeey'

// We can do that because the method is writable by default
// by setting 'writable: false', js (not ts. Is is one of the reasons it is experimental) doesn't leave us do that anymore

const response: string = person.greeting('You are wellcome')
console.log(response)

// classPrototype: {}
// methodName: greeting
// propertyDescriptor: {
//   value: [Function: greeting],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }
// YOU ARE WELLCOME