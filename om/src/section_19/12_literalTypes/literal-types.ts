let x = 10 // integer is a number
x = 0b1010 // binary is a number

const y = 10 // here, 10 is the literal type of y. It is a subtype of number
// y = 10 // does not work, because it is a const

let a: 10 = 10 // here, 10 is the literal type of 10
a = 10 // works, because it is not a const

let b = 10 as const // 10 is the literal type of b

// we can use 'as const' in arrays and objects, to make then imutable
const person = {
	name: 'Bruno' as const,
	lastName: 'Conde'
}

// person['name'] = 'Paul' // does not work
person['lastName'] = 'Paul' // works

//////////////////
// here we acts like enum but with secure types
function chooseColor(color: 'Red' | 'Green' | 'Blue'): string {
	return color
}

console.log(chooseColor('Red'))

// export to use module mode scope and make x belongs to this module scope
export default 1