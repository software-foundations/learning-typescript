export class Person<T, U> {
	constructor(public name: T, public age: U) {}
}

// Here, Ts can infer the types
const person1 = new Person('Bruno', 90)
const person2 = new Person(['Bruno'], 90)
const person3 = new Person(['Bruno'], {age: 90})
const person4 = new Person<string, number>('Bruno', 90)

// Here, Stack is a unknown (Ts could not infer the type)
// T is inferred as any
export class Stack<T> {
	private counter = 0

	// using index signature
	private elements: { [ k: number ]: T } = {}

	push(element: T): void {
		this.elements[this.counter] = element
		this.counter++
	}

	pop(): T | void {
		if (this.isEmpty()) {
			return undefined
		}
		this.counter--
		const element = this.elements[this.counter]
		delete this.elements[this.counter]
		return element
	}

	isEmpty(): boolean {
		return this.counter === 0
	}

	length(): number {
		return this.counter
	}

	showStack(): void {
		for (const key in this.elements) {
			console.log(this.elements[key])
		}
	}
}

const stack = new Stack<number | string>()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push('Bruno')
stack.showStack()
/*
1
2
3
Bruno
*/

const element1 = stack.pop()
console.log('popped element: ', element1) // Bruno

stack.showStack()
/*
1
2
3
*/
