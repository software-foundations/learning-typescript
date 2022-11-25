// We can use type narrowing
let x // x is undefined

if (typeof x === 'undefined') x = 20

console.log(x * 2) // 40

///////////////////////////
// Factory function

export function createPerson
(
	firstName: string,
	lastName?: string
):
{
	firstName: string
	lastName?: string
}
{
	return {
		firstName,
		lastName
	}

}

///////////////////////////
// In this case, the return type should be inferred
// In this case, we can have 2 return types: number | null
// Here we can se the problem in using any
// So, we shouldn't use any

export function squareOf(x: any): number | null {
	if (typeof x === 'number') return x * x;
	return null	
}

// Type 'number | null' is not assignable to type 'number'.
// const squaseOfTwo: number = squareOf(2)

// const squaseOfTwoNumber: number | null = squareOf(2) // works
const squaseOfTwoNumber = squareOf(2)
console.log(squaseOfTwoNumber)

if (squaseOfTwoNumber === null) {
	// here, TS knows that squaseOfTwoNumber is null
	console.log('Invalid')
} else {
	// here, TS knows that squaseOfTwoNumber is a number
	// We call this type narrowing
	// TS knows that return type could be number | null
	// If it is not null, then, TS KNOWS AND TREAT IT AS NUMBER
	console.log('Correct')
}

const squareOfTwoString = squareOf('2')
console.log(squareOfTwoString)
