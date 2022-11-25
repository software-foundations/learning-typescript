let x: unknown

x = 100
x = 'Bruno'
x = 900

const y = 400

// console.log(x + y) // only works with any (even if x is a string it works) or type narrowing

// type narrowing
if (typeof x === 'number') {
	console.log(x + y)
}