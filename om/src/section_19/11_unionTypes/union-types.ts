// here, the return type is inferred
function add(a: number, b: number) {
	return a + b
}

console.log(add(10, 20)) // 30

// here, the type is not inferred if we do type narrowing
// because + operator expects number operands

// by doing the type narrowing, the type is inferred as number | string | undefined
// It is a bad practice make a function do and return more than a thing
function addOrConcat(a: number | string, b: number | string) {

	// here, we have type narrowing
	// here, the type can be inferred
	if (typeof a === 'number' && typeof b === 'number') return a + b // ts knows it is a number

	if (typeof a === 'string' && typeof b === 'string') return a + b // ts knows it is a string
}

console.log(addOrConcat(10, 20)) // number
console.log(addOrConcat('10', '20')) // string
console.log(addOrConcat(10, '20')) // undefined

////////////////
// Here, the return type is inferred as (number | string)
// by doing type narrowing and deal with case not coverage by the 2 ifs
// 
// But, we can specify these return types by ourselves
function addOrConcat2(
	a: number | string | boolean,
	b: number | string | boolean): number | string {
	if (typeof a === 'number' && typeof b === 'number') return a + b
	if (typeof a === 'string' && typeof b === 'string') return a + b

	return `${a}${b}`
}

console.log(addOrConcat2(10, 20)) // number
console.log(addOrConcat2('10', '20')) // string
console.log(addOrConcat2(10, '20')) // string
console.log(addOrConcat2(true, true)) // string