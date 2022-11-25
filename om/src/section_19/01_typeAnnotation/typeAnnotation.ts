/* eslint-disable */

// Basic types
let myName: string = 'Bruno'
let age: number = 30
let adult: boolean = true // does not accept any truthy or falsy values
let symbol: symbol = Symbol('any-symbol')
// let big: bigint = 10n

// Arrays

// both works
// let arrayOfNumbers: Array<number> = [1, 2, 3]
let arrayOfNumbers: number[] = [1, 2, 3] // preferable
let arraryOfStrings: string[] = ['a', 'b', 'c']


// Objects

// ? means optional
let person: {name: string, age: number, adult?: boolean} = {
    name: 'Bruno',
    age: 30}

// functions

// here, the return type is infered (number)
// when the return type ins't infered, we can make it explitty
function sum(x: number, y: number) {
    return x + y
}

const sum2: (x: number, y: number) => number = (x, y) => x + y
