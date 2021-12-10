// literals types is about use -> values as types <-

/*
Every time we use const (in TypeScript) we are using literal types
*/

let x = 10;
x = 0b1010; // 1010 (binary means 10 (decimal)

console.log(x);

const y = 10; // const y: 10. 10 is a subtype of Number
const a = 100; // const y: 10. 10 is a subtype of Number

// so, we can do this behavior with let, but is not recommended

let y2: 10 = 10;
let a2: 100 = 100;

// we can do this behavior with let and const
// -> THIS SYNTAX IS USEFULL IN OBJECTS
let m: 'one' = 'one' as const;
let n: 2 = 2 as const;

const person = {
	name: 'Bruno' as const,
	lastname: 'Conde',
};

export function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
	return color;
}

console.log(chooseColor('Red'), person, x, y);

// Argument of type '" "' is not assignable to parameter of type '"Red" | "Yellow" | "Blue"'.
// chooseColor(' ')
