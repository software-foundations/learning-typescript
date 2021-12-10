let x;

if (typeof x === 'undefined') x = 'x is undefined';

console.log(x * x); //'undefined' * 'undefined' === Nan

// factory function
// (args): {return_type} {body}
export function createPerson(
	firstName: string,
	lastName?: string
): {
	firstName: string;
	lastName?: string;
} {
	return {
		firstName,
		lastName,
	};
}

export function squareOf(x: any): number | null {
	if (typeof x === 'number') return x * x;
	return null;
}

const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
	console.log('Conta inválida');
} else {
	console.log(squareOfTwoString * 100);
}
