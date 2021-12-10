type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type Intersection = AB & AC & AD;

const person: Person = {
	name: 'Bruno',
	lastName: 'Conde',
	age: 21,
};

console.log(person);

export { person };
