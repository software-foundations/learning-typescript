////////////
// Record //
////////////
const obj1: Record<string, string> = {
	name: 'Bruno',
	lastName: 'Conde',
	// age: 100 // Type 'number' is not assignable to type 'string'.
}

// { name: 'Bruno', lastName: 'Conde' }
console.log(obj1)

const obj2: Record<string, string | number> = {
	name: 'Bruno',
	lastName: 'Conde',
	age: 100
}

// { name: 'Bruno', lastName: 'Conde', age: 100 }
console.log(obj2)

//////////////
// Required //
//////////////

type PersonProtocol = {
	name?: string,
	lastName?: string,
	age?: number
}

type PersonRequired = Required<PersonProtocol>


// const obj3: PersonRequired = {
// 	name: 'Bruno',
// 	lastName: 'Conde',
// 	// age: 100 // Property 'age' is missing


/////////////
// Partial //
/////////////

type PersonPartial = Partial<PersonProtocol>
const obj4: PersonPartial = {}
console.log(obj4) // {}

//////////////
// Readonly //
//////////////

type PersonReadonly = Readonly<PersonRequired>
const obj5: PersonReadonly = {
	name: 'Bruno',
	lastName: 'Conde',
	age: 35
}

// { name: 'Bruno', lastName: 'Conde', age: 35 }
console.log(obj5)

//////////
// Pick //
//////////

type KeysToPick = 'name' | 'lastName'
type PersonPick = Pick<PersonRequired, KeysToPick>

const obj6: PersonPick = {
	name: 'Bruno',
	lastName: 'Conde'
}

// { name: 'Bruno', lastName: 'Conde' }
console.log(obj6)

/////////////////////////
// Extract and Exclude //
/////////////////////////

type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

type TypeExclude = Exclude<ABC, CDE> // "A" | "B"
type TypeExtract = Exclude<ABC, CDE> // "C"

//////////////////////////////////
// Application of utility types //
//////////////////////////////////

type AccountMongo = {
	_id: string,
	name: string,
	// lastName: string, // works, too
	age: number
}

///////////////////////////////////
// Way 01 - Hardcoded /////////////
// Duplication ////////////////////
// Changes in AccountMongo ////////
// Require changes in AccountApi //
///////////////////////////////////

type AccountApi = {
	id: string,
	name: string, // Duplication
	age: number // Duplication
}

//////////////////////////////////
// Way 02 - Using Utility types //
//////////////////////////////////

type AccountApi2 = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
	id: string
}

//////////////
// Continue //
//////////////

function mapAccount(accountMongo: AccountMongo): AccountApi {
	// ... -> spread operator
	const { _id, ...accountData } = accountMongo
	return { id: _id, ...accountData }
}

const accountMongo: AccountMongo = {
	_id: '45jhk32lg2n43',
	name: 'Bruno',
	// lastName: 'Conde', // works, too
	age: 30 
}

const accountApi: AccountApi = mapAccount(accountMongo) // works, too
const accountApi2: AccountApi2 = mapAccount(accountMongo)

// { id: '45jhk32lg2n43', name: 'Bruno', age: 30 }
console.log(accountApi)

// { id: '45jhk32lg2n43', name: 'Bruno', age: 30 }
console.log(accountApi2)

// module mode
export default 1;