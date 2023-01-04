# Intro to Generic Types

- It is useful when dealing with types that we are not sure about

- Egg: a function parameter, etc.

- It acts like we add parameters inside the types

- Generics can be used in many different places

- This/These type(s) can be passed through function calls

```typescript
// ts (in background) uses generics to infer that is the number[]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type FilterCallback<U> = (
	value: U,
	index?: number,
	array?: U[]
) => boolean

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
	const newArray: T[] = []
	for (let i = 0; i < array.length; i ++) {
		if (callbackfn(array[i])) {
			newArray.push(array[i])
		}
	}
	return newArray
}

const lessThan5 = (value: any) => {
	// Refining the type is no more necessary
	// Because the generic type is passed through the function calls
	// if (typeof value === 'number') return value < 5
	// return false
	return value < 5
}

console.log(myFilter(array, (value) => {
	// Refining the type no more necessary
	// Because the generic type is passed through the function calls
	// if (typeof value === 'number') return value < 5
	// return false

	return value < 5
})) // [1, 2, 3, 4]

console.log(myFilter(array, lessThan5)) // [1, 2, 3, 4]
```

# Arrays and Promises are Generics

- It is useful to use Generics when dealing with external APIs

```typescript
type MyType = number

export const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5]
console.log(arrayOfNumbers)

async function promiseAsync() {
	return 1
}

function myPromise(): Promise<MyType> {
	return new Promise((resolve, reject) => {
		setTimeout(() => { resolve(1) }, 3000)
	})
}

promiseAsync().then( result => console.log(result + 1) ) // 2
myPromise().then( result => console.log(result + 1) ) // 2
```

# Generics with interfaces and Type Alias

```typescript
// We can pass default values to a generic
// It allows implement the protocol without pass the types

// interface PersonProtocol<T, U> {
interface PersonProtocol1<T = string, U = number> {
	name: T
	lastName: T
	age: U
}

// interface PersonProtocol<T, U> {
type PersonProtocol2<T = string, U = number> = {
	name: T
	lastName: T
	age: U
}


function createStudent1Protocol1(): void {
	// using the default generic types defined in the interface
	const student: PersonProtocol1 = {
		name: 'Bruno',
		lastName: 'Conde',
		age: 76
	}
	console.log(student)
}

function createStudent2Protocol1(): void {
	// passing the type to the generic interface
	const student: PersonProtocol1<number, any> = {
		name: 123,
		lastName: 456,
		age: {'letters': ['aeiou']}
	}
	console.log(student)
}

function createStudent1Protocol2(): void {
	// using the default generic types defined in the interface
	const student: PersonProtocol2 = {
		name: 'Bruno',
		lastName: 'Conde',
		age: 76
	}
	console.log(student)
}

function createStudent2Protocol2(): void {
	// passing the type to the generic interface
	const student: PersonProtocol2<number, any> = {
		name: 123,
		lastName: 456,
		age: {'letters': ['aeiou']}
	}
	console.log(student)
}

function createStudents(): void {
	createStudent1Protocol1()
	createStudent2Protocol1()
	createStudent1Protocol1()
	createStudent2Protocol2()
}

createStudents()

// { name: 'Bruno', lastName: 'Conde', age: 76 }
// { name: 123, lastName: 456, age: { letters: [ 'aeiou' ] } }
// { name: 'Bruno', lastName: 'Conde', age: 76 }
// { name: 123, lastName: 456, age: { letters: [ 'aeiou' ] } }
```

# Constraints in generics

- It aims to reduce the amplitude of a generic

- It works with interface/type

- We use the <code>extends</code> keyword to make a constraint in generics

- A constraint limits the maximum type that a generic can be (extend)

```typescript
type GetValueOfAnObjectByItsKey = <O, K extends keyof O>(object: O, key: K) => O[K]

const getValue: GetValueOfAnObjectByItsKey = (object, key) => object[key]

const animal = {
	name: 'Dog',
	vaccines: ['A', 'B', 'C'],
	color: 'white'
}

// export here is just to avoid global scope issues
export const name = getValue(animal, 'name')
export const color = getValue(animal, 'color')

console.log(name) // Dog
console.log(color) // white
```

# Generics with Classes (stack data structure)

```typescript
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

```

# Generics With Intersections

```typescript
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {

	// way 01: spread operator (works, too)
	// return { ...obj1, ...obj2 }

	// way 02: Objec.assign()
	return Object.assign({}, obj1, obj2)
}

const obj1 = { key1: 'val1'}
const obj2 = { key2: 'val2'}
const union = mergeObjects(obj1, obj2)
console.log(union)
```

# Type predicate

- Useful when a function returns a boolean

- It acts like make an assestion in the return type

```typescript
// 'value is number' is a predicate
export function isNumber(value: unknown): value is number {
	return typeof value === 'number'
}

console.log(isNumber('123')) // false
console.log(isNumber(123)) // true

export function sum<T>(...args: T[]): number {
	const _return = args.reduce((sum, value) => {
		if(isNumber(sum) && isNumber(value)) {
			return sum + value
		}
		return sum
	}, 0)

	return _return
}

console.log(sum(1, 2, 3)) // 6
console.log(sum('a', 'b', 'c')) // 0

// Will not work
// Here, TS cannot infer the type f T properly

//  Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(sum(1, 2, 'BRUNO'))

// Argument of type 'number' is not assignable to parameter of type 'string'
// console.log(sum('BRUNO', 1, 2))

// a work arround to this is to put the things in an array and spread it
console.log(sum(...[1, 2, 'BRUNO', 3, 1])) // 7
```

# Utility types

- <code>Record, Required, Partial, Readonly, Pick, Extract, and Exclude</code>

- These are the default generic types in typescript

- <code>Record<keyType, ValueType></code>

```typescript
const obj1: Record<string, string> = {
	name: 'Bruno',
	lastName: 'Conde',
	// age: 100 // Type 'number' is not assignable to type 'string'.
}

// { name: 'Bruno', lastName: 'Conde' }
console.log(obj1)

const obj2: Record<string, string | number> = {
	name: 'Bruno',
	lastName: 'Conde',
	age: 100
}

// { name: 'Bruno', lastName: 'Conde', age: 100 }
console.log(obj2)
```

- <code>Required<AnotherType></code>: turns everything required in AnotherType, even it is optional

```typescript
type PersonProtocol = {
	name?: string,
	lastName?: string,
	age?: number
}

type PersonRequired = Required<PersonProtocol>

const obj3: PersonRequired = {
	name: 'Bruno',
	lastName: 'Conde',
	// age: 100 // Property 'age' is missing
}
```

- <code>Partial<AnotherType></code>: turns evetyhing in AnotherType optional

```typescript
type PersonProtocol = {
	name: string,
	lastName: string,
	age: number
}

type PersonPartial = Partial<PersonProtocol>
const obj4: PersonPartial = {}
console.log(obj4) // {}
```

- <code>Readonly<AnotherType></code>: turns everthing readonly in AnotherType

```typescript
type PersonProtocol = {
	name?: string,
	lastName?: string,
	age?: number
}

type PersonRequired = Required<PersonProtocol>

type PersonReadonly = Readonly<PersonRequired>

const obj5: PersonReadonly = {
	name: 'Bruno',
	lastName: 'Conde',
	age: 35
}

// { name: 'Bruno', lastName: 'Conde', age: 35 }
console.log(obj5)

// module mode
export default 1;
```

- <code>Pick</code>: select specifc keys of a interface/typed

```typescript
type PersonProtocol = {
	name?: string,
	lastName?: string,
	age?: number
}
type PersonRequired = Required<PersonProtocol>
type PersonReadonly = Readonly<PersonRequired>

type KeysToPick = 'name' | 'lastName'
type PersonPick = Pick<PersonRequired, KeysToPick>

const obj6: PersonPick = {
	name: 'Bruno',
	lastName: 'Conde'
}

// { name: 'Bruno', lastName: 'Conde' }
console.log(obj6)
```

- <code>Exclude<T, U></code>: Get types on T not present in U
- <code>Extract<T, U></code>: Gets intersection types between T and U

```typescript
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

type TypeExclude = Exclude<ABC, CDE> // "A" | "B"
type TypeExtract = Extract<ABC, CDE> // "C"
```

- Application of utility types

```typescript
type AccountMongo = {
	_id: string,
	name: string,
	// lastName: string, // works, too
	age: number
}

///////////////////////////////////
// Way 01 - Hardcoded /////////////
// Duplication ////////////////////
// Changes in AccountMongo ////////
// Require changes in AccountApi //
///////////////////////////////////

type AccountApi = {
	id: string,
	name: string, // Duplication
	age: number // Duplication
}

//////////////////////////////////
// Way 02 - Using Utility types //
//////////////////////////////////

type AccountApi2 = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
	id: string
}

//////////////
// Continue //
//////////////

function mapAccount(accountMongo: AccountMongo): AccountApi {
	// ... -> spread operator
	const { _id, ...accountData } = accountMongo
	return { id: _id, ...accountData }
}

const accountMongo: AccountMongo = {
	_id: '45jhk32lg2n43',
	name: 'Bruno',
	// lastName: 'Conde', // works, too
	age: 30 
}

const accountApi: AccountApi = mapAccount(accountMongo) // works, too
const accountApi2: AccountApi2 = mapAccount(accountMongo)

// { id: '45jhk32lg2n43', name: 'Bruno', age: 30 }
console.log(accountApi)

// { id: '45jhk32lg2n43', name: 'Bruno', age: 30 }
console.log(accountApi2)
```