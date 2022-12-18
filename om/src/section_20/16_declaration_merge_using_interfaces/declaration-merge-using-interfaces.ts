export interface Person {
	name: string
}

export interface Person {
	readonly lastName: string
}

export interface Person {
	// reaonly
	// 1º -> applyed to the property reference
	// 2º -> applyed to the value
	readonly addresses: readonly string[]
}

export interface Person {
	// The property can be number | undefined
	// Because it is optional
	readonly age?: number
}

const person: Person = {
	name: 'Bruno',
	lastName: 'Conde',
	addresses: ['123 Central Avenue']
}

console.log(person)