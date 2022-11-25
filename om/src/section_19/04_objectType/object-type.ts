const objA =  {
	key1: 'Value 1', // key1 is infered as string
	key2: 'Value 2' // key2 is infered as string
}

// We cannot change the type of the key1 and 2
// We can assing a different value form key 1 and 2 but to the string type

objA.key1 = 'Anothe value'
objA.key2 = 'Anothe value'

/////////////////////////

// It is not safe

const objB: Record<string, unknown> = {
	key1: 'Value 1',
	key2: 'Value 2'
}

/////////////////////////
// We can assign a type to a object

const objC: {
	key1: string
	key2: string
} = {
	key1: 'A value',
	key2: 'Another value'
}

/////////////////////////
// We can set an optional property

const objD: {
	key1: string
	key2: string
	key3?: string
} = {
	key1: 'A value',
	key2: 'Another value'
}


/////////////////////////
// Index signature
// Specify the type of a index and the type of its value

const objE: {
	k1: string
	k2: string
	k3?: string
	[key: string]: unknown
} = {
	k1: 'A',
	k2: 'B',
	k4: 4
}

/////////////////////////
// readonly - doesn't allow a property be changed

const objF: {
	readonly k1: string
} = {
	k1: 'A value'
}