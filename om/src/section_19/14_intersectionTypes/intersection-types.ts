type HasName = { name: string }
type HasLastName = { lastName: string }
type HasAge = { age: number }

type Person = HasName & HasLastName & HasAge // &/AND mades the intersection

const person: Person = {
	lastName: 'Conde',
	name: 'Bruno',
	age: 30
}

// using the module mode
// it is to avoid global scope used in script mode
export { person }

/////////////////////////

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type Intersection = AB & AC // A

// const a: Intersection = 'B' // Type '"B"' is not assignable to type '"A"'.
const a: Intersection = 'A'
