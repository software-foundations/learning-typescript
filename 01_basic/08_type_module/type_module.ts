// Tuple -> Array with fixed size and value types
// 		 -> Deletion works
//       -> Override (with same type of the index) works

const dataClient1: readonly [number, string] = [1, 'Bruno'];
const dataClient2: [number, string, string] = [1, 'Bruno', 'Conde'];
const dataClient3: [number, string, ...string[]] = [1, 'Bruno', 'Conde'];
const dataClient3test: [number, string, ...string[]] = [
    1,
    'Bruno',
    'Conde',
    'Costa',
    'Silva',
];

console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient3test);

// works, but ESLint says:
// Cannot assign to '0' because it is a read-only property.
dataClient1[0] = 100;
dataClient1[1] = 200;

console.log('-----------')

console.log(dataClient1);

// works, but ESLint says:
// The operand of a 'delete' operator cannot be a read-only property.
delete dataClient1[0];

console.log(dataClient1);

console.log('-----------------')

// both works
// const myReadOnlyArray: ReadonlyArray<string> = [...'Bruno Conde'.split(' ')]
const myReadOnlyArray: ReadonlyArray<string> = ['Bruno', 'Conde']

console.log(myReadOnlyArray)
