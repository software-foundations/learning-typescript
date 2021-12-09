export function multiplyArgs(...args: Array<number>): number {
	// 1 is returned if no args is passed
	return args.reduce((ac, value) => ac * value, 1)
}

export function concatenateString(...args: string[]): string {
	return args.reduce((ac, value) => ac + value)
}

console.log('multiplyArgs')
console.log(multiplyArgs())
console.log(multiplyArgs([]))
console.log(multiplyArgs(1, 2, 3))

console.log('\nconcatenateString')
console.log(typeof concatenateString("1", "2")) // <string>
console.log(typeof concatenateString(1, 2)) // <number>

