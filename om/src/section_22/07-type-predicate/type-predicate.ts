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
