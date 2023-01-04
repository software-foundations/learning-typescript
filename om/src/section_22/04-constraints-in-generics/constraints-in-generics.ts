type GetValueOfAnObjectByItsKey = <O, K extends keyof O>(object: O, key: K) => O[K]

const getValue: GetValueOfAnObjectByItsKey = (object, key) => object[key]

const animal = {
	name: 'Dog',
	vaccines: ['A', 'B', 'C'],
	color: 'white'
}

// export here is just to avoid global scope issues
export const name = getValue(animal, 'name')
export const color = getValue(animal, 'color')

console.log(name) // Dog
console.log(color) // white
