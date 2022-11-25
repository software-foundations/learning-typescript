// never is used when a function never return a value
// using void in return type has the same behavior of use never
// it is useful in infinite loops and in functions that throws an error
export function createError(): never {
	throw new Error('My custom error')
}

createError()