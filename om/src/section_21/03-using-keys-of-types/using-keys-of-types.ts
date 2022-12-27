type Vehicle = {
	brand: string
	year: number
}

type Car = {
	// getting keys of types
	brand: Vehicle['brand'] // string
	year: Vehicle['year'] // number
	name: string
}

const car: Car = {

	brand: 'Ford',
	year: 2022,
	name: 'ABC'
}

console.log(car)