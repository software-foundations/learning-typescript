let myName: string = "Bruno"

let num: number = 1

let condition: boolean = true

let mySymbol: symbol = Symbol('any symbol')

let arrayOfNumbers: Array<number> = [1, 2, 3]

let arrayOfNumbers2: numbers[] = [1, 2, 3]

// objects
// ? -> means optional
let myObject: {name: string, age: number, adult?: boolean} = {
	name: 'Bruno',
	age: 25
}

// functions
function calc_sum(x: number, y: number): number {
	return x + y
}

const calc_sum2: (x: number, y: number) => number = (x, y) => x + y

console.log(typeof myName)
console.log(typeof num)
console.log(typeof condition)
console.log(typeof mySymbol)
console.log(typeof arrayOfNumbers)
console.log(typeof arrayOfNumbers2)
console.log(typeof myObject)
console.log(myObject)
console.log(typeof calc_sum)
console.log(calc_sum(1, 2))
console.log(typeof calc_sum2)
console.log(calc_sum2(1, 2))

// Module mode
export default 1;