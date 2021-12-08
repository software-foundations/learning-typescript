const myObject: {
	readonly keyA: string
	keyB: string
	keyC?: String
	[key: string]: unknown
} = {
	keyA: "Value A",
	keyB: "value B",
}

console.log(myObject)

myObject.keyB = 'Another value'
myObject.keyA = 'New value'
myObject.keyC = 'New key'

console.log(myObject)

export default 1;
