/*
Alias is to create Alias to some types or even crete new types
*/

type Age = number;

type Person = {
	name: string;
	age: Age;
	salary: number;
	favoriteColor?: string;
};

type ColorRGB = 'Red' | 'Green' | 'Blue'; // or
type ColorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';
type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
	age: 30,
	name: 'Bruno',
	salary: 5000,
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
	return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Blue'));
