// export keyword means that we are in the module mode

// We can use the rest operator to get the values
export function multiplyArgs(...args: Array<number>): number {
	const initialValue = 1
	return args.reduce((accum, current) => accum * current, initialValue)
}

// We can leave ts infer a type. But we shouldn't
const result: number = multiplyArgs(1, 2, 3)
console.log(result)

//////////////////////////////////
// string[] means an array of strings
export function concatenateString(...args: string[]): string {	
	return args.reduce((accum, current) => accum + current)
}

const result2: string = concatenateString("A", "B", "C")
console.log(result2)

//////////////////////////////////
// using map

export function toUpperCase(...args: string[]): string[] {
	return args.map(item => item.toUpperCase())	
}

const result3: string[] = toUpperCase("c", "d", "e")
console.log(result3)