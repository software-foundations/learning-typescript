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