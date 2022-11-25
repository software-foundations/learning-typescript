type Name = string
type Age = number
type RGBColor = 'Red' | 'Green' | 'Blue'
type CMYBColor = 'Cyan' | 'Magenta' | 'Yellow' | 'Black'
type FavoriteColor = RGBColor | CMYBColor

type Person = {
	name: Name
	age: Age
	salary: number
	favoriteColor?: FavoriteColor
}

const person: Person = {
	name: 'Bruno',
	age: 10,
	salary: 200_000, // typescript allows _ to get the number more readable
	// favoriteColor: 'Brown' // Type '"Brown"' is not assignable to type 'FavoriteColor | undefined'.
	favoriteColor: 'Blue' // Type '"Brown"' is not assignable to type 'FavoriteColor | undefined'.
}

// We do that to does not use the global scope used in script mode
// module mode has its own scope
// So, a variable declared in a script is always in global scope
// Then, scripts cannot has the same variable/function/class name declarations/definition
export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
	// it is a shallow copy (not deep copy)
	return { ...person, favoriteColor: color} 
}

// a new person is returned
// the original object was not changed
// it matches the functional programming
console.log(setFavoriteColor(person, 'Red'))

console.log(person)