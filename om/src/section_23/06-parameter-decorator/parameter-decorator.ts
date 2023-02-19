function decorator(
	classPrototype: any,
	methodName: string | symbol,
	index: number
): any {
	console.log('------ start param decorator')
	console.log('classPrototype: ', classPrototype)
	console.log('methodName: ', methodName)
	console.log('index: ', index)
	console.log('------ end param decorator')
	return "anything"
}

export class Person {
	name: string
	age: number

	constructor(@decorator name: string, @decorator age: number) {
		this.name = name
		this.age = age
	}

	greeting(@decorator message: string): string {
		return `Hi, my name is ${this.name}. I am ${this.age} years old. ${message}`
	}
}

const person = new Person('Bruno', 26)

// person.greeting = () => 'Heeeeey'

// We can do that because the method is writable by default
// by setting 'writable: false', js (not ts. Is is one of the reasons it is experimental) doesn't leave us do that anymore

const response: string = person.greeting('You are wellcome')
console.log(response)

// the classPrototype is the class itself
// The constructor methodName is undefined
// The first parameter has index 0; second 1; and so on

/*
------ start param decorator
classPrototype:  {}
methodName:  greeting
index:  0
------ end param decorator
------ start param decorator
classPrototype:  [class Person]
methodName:  undefined
index:  1
------ end param decorator
------ start param decorator
classPrototype:  [class Person]
methodName:  undefined
index:  0
------ end param decorator
Hi, my name is Bruno. I am 26 years old. You are wellcome
*/