const myObject: {
	readonly keyA: string
	keyB: string
	keyC?: String
	[key: string]: unknown // index assignment
} = {
	keyA: "Value A",
	keyB: "value B",
}

console.log(myObject)

myObject.keyB = 'Another value'
myObject.keyC = 'New value'
myObject.keyD = 'New key'

console.log(myObject)

export default 1;
