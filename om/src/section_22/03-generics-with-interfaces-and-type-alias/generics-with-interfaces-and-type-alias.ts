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
