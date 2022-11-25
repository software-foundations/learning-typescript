// Mutable tuple
// TS does not perceve that we use pop and change the tuple
const clientData: [number, string] = [1, 'Bruno']
clientData[0] = 100
console.log(clientData)
console.log(clientData.pop())

///////////////////////
// imutable tuple
// It prevents pop and push in array variables
const requestData: readonly [number, string] = [1, 'Bruno']

///////////////////////
// optional parameters in a tuple
const a : [number, string, string?] = [1, 'Bruno']
console.log(a)

///////////////////////
// same of the above
const b: [number, string, (string | undefined)?] = [1, 'Bruno']
console.log(b)

///////////////////////
// We can use the rest operator
const c: [number, string, ...string[]] = [1, 'Bruno', 'Conde']
console.log(c)

///////////////////////
// We can use readonly in arrays
// But, it is confusing
// It'd better to use tuples, instead
const arr: readonly string[] = ['1', '2', '3']
console.log(arr)

///////////////////////
// We can use generics
const arrGeneric: ReadonlyArray<string> = ['Bruno', 'A']
console.log(arrGeneric)