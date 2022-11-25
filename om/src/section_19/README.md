# Type annotation

- Remember that typescript makes type inference during the assignment

- Type annotation is to specify the type of variable before/during its assignment

```ts
const name: string = 'Bruno'
```
- We can use this in the top of the file

```ts
/* eslint-disable */
```

- The types that already exist in js are created with lower case initial

- The other types (like <code>Symbol</code> constructor for <code>symbol</code> annotation) are created with capital initial

- We can create our own types using <code>type alias</code>

- tip: **IN DECLARATION + ASSIGNMENT, DOESN'T MAKE TYPE ANNOTATIONS**

- Then, leave ts infer type in declaration + assignment

# Type any

- <code>any</code> is such a type we should avoid

- <code>any</code> means absence of type

- A any type does not is syntax error, but can cause runtime errors

# Void type

- void means without return

- we can use <code>void</code> in functions or in methods

- rest operator: <code>function (...args) {}</code>

- tip: **We should make explicit the return type**

# Object type (objects in general)

- It is important

- If ts infered a type as abject, we cannot only assing a value of the infered type

- We cannot set <code>objecy</code> as a type

```typescript
const objA =  {
	key1: 'Value 1', // key1 is infered as string
	key2: 'Value 2' // key2 is infered as string
}

// We cannot change the type of the key1 and 2
// We can assing a different value form key 1 and 2 but to the string type

objA.key1 = 'Anothe value'
objA.key2 = 'Anothe value'
```

- We can say that the key is a string and the value is a unknown type

- It is not safe to do that way
```typescript
const objB: Record<string, unknown> = {
	key1: 'Value 1',
	key2: 'Value 2'
}
```

- We can assign a type to a object

```typescript
const objC: {
	key1: string
	key2: string
} = {
	key1: 'A value',
	key2: 'Another value'
}
```

- We can set an optional property to an object

```typescript
const objD: {
	key1: string
	key2: string
	key3?: string
} = {
	key1: 'A value',
	key2: 'Another value'
}
```

- **Index signature**: we can specify that the object can have any string of unknown values

- It specifies the type of a index and the type of its value

```typescript
const objE: {
	k1: string
	k2: string
	k3?: string
	[key: string]: unknown // any could be used instead of unknown. unknown is preferred
} = {
	k1: 'A',
	k2: 'B',
	k4: 4
}
```

- We can use <code>only</code> access modifier to doesn't allow that a property be changed

```typescript
const objF: {
	readonly k1: string
} = {
	k1: 'A value'
}
```

# Array type

- We have 2 forms of create an array: <code>Array[T]</code> (generics) and <code>T[]</code>

# Tuple type

- <code>val1: [number, string]</code>

- It is not exist in JS

- It is TS only

- It is an array with specific both types and length

- To make a tuple imutable we must use <code>readonly</code>

- We can use <code>readonly</code> with both tuples and arrays

- We can insert/remove elements on a tuple (breaking it) using push or pop functions

- We can have optional items in a tuple

- We can us

# Null and undefined

- Are present in JS and TS

- They have different intentions

- We generaly don not use <code>undefined</code>

- <code>null</code> is more used

- We can have a function with more then a return type

- It happens when we have to deal with possible types of a any variable

- Then, we shouldn't use any, because we loose type checking power unless we made type narrowing

- Type narrowing is useful to deal with the possibility of does not find a record in a database

- Then, then return type of a funcion that search the record can be recordType | null

- Then, the client code of that functio must deal with these two return types and use type narrowing to deal with it

# Never type

- Says that a function/method will never return a value

- It is useful in two scenarious: inifite loop and a function that throws an error

# Enum

- It is a data structure when we have determined options to a thing

- It as non ordered data structure when we want enumerate things

```typescript
enum Colors {
	RED, // 0
	BLUE, // 1
	YELLOW // 2
}

console.log(Colors.RED) // 0
console.log(Colors[0]) // RED

enum Clients {
	BRUNO = 1, // 1
	PAUL // 2
}

console.log(Clients.PAUL) // 2
```

- We can use a enum as a type of a parameter of a function/method

# Unknown type

- It is a safe any

- In TS hierarchy, unknown comes first then the other types

- Then, it comes first then any

- Unknown forces us to check the type before made some operation

# Union Types

- Specify more than a type for a variable/function/method

- Tip: merge union types in a alias

```typescript
////////////////
// Here, the return type is inferred as (number | string)
// by doing type narrowing and deal with case not coverage by the 2 ifs
//
// But, we can specify these return types by ourselves
function addOrConcat2(
	a: number | string | boolean,
	b: number | string | boolean): number | string {
	if (typeof a === 'number' && typeof b === 'number') return a + b
	if (typeof a === 'string' && typeof b === 'string') return a + b

	return `${a}${b}`
}

console.log(addOrConcat2(10, 20)) // number
console.log(addOrConcat2('10', '20')) // string
console.log(addOrConcat2(10, '20')) // string
console.log(addOrConcat2(true, true)) // string
```

# Literal types

- **Is about use values as types**

- Everytime we use <code>const</code> we use literal types

- We can use const assertion (as const)

# Type alias

- It is basically create a alias for a type

- It acts like a type protocol

- It cleans up the code

- We use <code>type</code> keyword to create a type alias

- Its use is similar <code>const</code> or <code>let</code>

- **The convention is to use Capital letter to name our own types**

# Intersection types

- It is not widely used as union types

- <code>&</code> AND between types

- It is treated as intersection of sets of types

- We can achieve this goal bu using an interface extends another

- Its preferable to use union types and interfaces instead of intersection types

- But, intersection types is more clean than interfaces

# Function as type

- We see it in type annotation class

- We can declare a function type

- It acts like an interface

- It provides autocomplete

```typescript
type mapStringsCallback = (item: string) => string

function mapStrings(arr: string[], callback: mapStringsCallback): string[] {
	const newArray: string[] = []

	for (let i = 0; i < arr.length; i++) {

		// ts knows that item is a string
		// because the type of callback is mapStringsCallback
		// and the item parameter is a string
		const item = callback(arr[i])
		newArray.push(item)
	}

	return newArray
}

const abc = ['a', 'b', 'c']

// ts knows that item is a string
// because the type of callback is mapStringsCallback
// and the item parameter is a string
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())

console.log(abcMapped) // [ 'A', 'B', 'C' ]
```

# Structural type system

- It is the type system used by TS

- It means that TS uses the restrictions of a type instead of its identity

- When we work with types, we work as TDD using types instead of create code

- The type alias is just an alias, not a type properly

- And the type alias aim to hold the restriction to be implemented

- Then, if we respect the restriction, we respect the type alias

- Even if we have other type alias with the same restriction

- Then, two type alias are equivalent if they have the same restriction

- Respect the restriction respect the restrictions described

- It's allowed to pass another things that are not described in the restrictions

- It doesn't raise an error because the restrictions are which were described

```typescript
type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = { username: string, password: string }

const verifyUser: VerifyUserFn = (user, sentValue) => {
	return (
		user.username === sentValue.username &&
		user.password === sentValue.password
	)
}

// They both works even if we put : User
const bdUser = { username: 'John', password: '123'}
const sentUser = { username: 'John', password: '123', permissions: []}

// TS doesn't care if bdUser and sentUser are of User type
// TS care if the object keys are the same
// and if the type of the key values are string

// Then, the restriction is a object that has username and password keys
// And that both keys have string values
// Then, the User type is just an alias for the restriction
const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn) // true
```

# Type assertions

- We need undesrtand subtypes to understand type assertions

- Type assertions are type cast/coercion basically

- We must have this configuration in tsconfig.json to work with type assertion

```json
"lib": ["ES2016", "DOM"],  // DOM is required to wok with type assertion
```

- We have **non null assertion** (Forbidden by eslint)

- We have <code>const user = receivedUser <strong>as</strong> User</code>

- <code>as</code> assert that a value <b>has the type <i>(or the subtype)</i> </b> of another

```typescript
// document.querySelector('body') can returns HTMLBodyElement | null
// it can bring problems if we try access something in a null
// We can check if body exists before trying acces something inside it
const body = document.querySelector('body')

////////////////////
// Type narrowing //
////////////////////

// here, TS knows that body is HTMLBodyElement if it is not null
// Then, it provides autocomplete
// RECOMMENDED
if (body) body.style.background = 'red'

////////////////////////////
// non null assertion (!) //
////////////////////////////

// assert that an object is not null
// RECOMMENDED
const body2 = document.querySelector('body')!
body2.style.background = 'red'

////////////////////
// Type assertion //
////////////////////

// Here, we assert that document.querySelector('body')
// return a HTMLBodyElement
// if not, it throws an error

// RECOMMENDED
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'

const input = document.querySelector('.input') as HTMLInputElement

//////////////////////////////////////////////////////
// (HTMLBodyElement | null) is disjoint from number //
//////////////////////////////////////////////////////
//               It will not work                   //
//////////////////////////////////////////////////////

const body4 = document.querySelector('body') as number

//////////////////////////////////////////////////////////////////////////
//           It works, because number is a subtype of unknown           //
// as asserts that a value has the type or the subtype of another value //
//////////////////////////////////////////////////////////////////////////

// It is not useful. We are loose the power of the typescript
const body5 = (document.querySelector('body') as unknown) as number
```

# Web pack

- We will setup webpack for frontend

- Since now, our setup is ready to work with backend

- <code>npx tsc</code> compiles everything in <code>src</code> folder

- The compiled code is js file, ready to run with <code>node</code>

- <code>npx tsc</code> compile every ts file in its js file respectively

- This way of compile files is useful when working with backend

- The compiled files are stored in "outDir" path defined in <code>tsconfig.json</code>

- A **bundler** unifies all js code in only one file

- Examples of bundles: webpack, gulp

- We need to install a loader of typescript for webpack: ts-loader

- We can use both live server (vscode extension) or webpack-dev-server package

- They aim to run up a server

```bash
nvm install --lts # 18.12.1
nvm use --lts
npm i ts-loader webpack webpack-cli -D
npm i webpack-dev-server -D # optional
```

- The webpack setup leaves on the root of the project: <code>webpack.config.js</code>

- node is the language of the webpack config file

- The root of the project stays at the level of node_modules folder

- The webpack has an outstanding documentation

- Then, we don't need to decorate these configurations

- Font: <a href="https://webpack.js.org/guides/typescript/">Documentation</a>

- The webpack need a entrypoint file

- It is described in entry in <code>webpack.config.js</code>

```js
const path = require('path')

module.exports = {
	// useful while in development
	// It increases speed 'cause does not minify the bundled file
	mode: 'development',

	////////////////////////////////////////////////////
	// src is the convention of the sorce code folder //
	////////////////////////////////////////////////////
	entry: './src/section_19/18_webpack/index.ts',

	module: {
		rules: [
			{
				// regular expression
				// find all .ts or .tsx files
				test: /\.tsx?$/,

				use: 'ts-loader',

				// regular expression
				exclude: /node_modules/
			}
		]
	},

	// module resolution
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},

	/////////////////////////
	// outputfile settings //
	/////////////////////////

	output: {
		filename: 'bundle.js',

		///////////////////////////////////////////////
		// dist is the convention for compiled files //
		///////////////////////////////////////////////
		path: path.resolve(__dirname, 'dist', 'assets', 'js')
	},

	// allows map js to ts files
	// allows see error line from ts file in browser console
	devtool: 'source-map'
}
```

- We need to made some changes in tsconfig.json

- Basically, we need to set the <code>outDir</code> folder in tsconfig.json

- <code>outDir</code> must macthes <code>output:{path}</code> in webpack.config.js

```json
{
  "compilerOptions": {
    "target": "es2016",
    "lib": ["ES2016", "DOM"],
    "module": "commonjs",

    ////////////
    // CHANGE //
    ////////////
    // "outDir": "./dist",
    "outDir": "./dist/assets/js",

    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": [
    "./src"
  ]
}
```
- Delete existing dist folder

- Bundle the project

```bash
# -> to watch changes and recompile in hot reload mode
npx webpack -w

# -> to just compile the project
npx webpack
```

- Check dist folder

- Create <code>dist/assets/css/style.css</code>

```css
body {
	background: red;
}
```

- Create <code>dist/assets/index.html</code>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

	<script src="assets/js/bundle.js"></script>
</body>
</html>
```

- Open up the index.html file with liveserver (go live)

- We can create a script in package.json to run weback with watch mode

- package.json

```json
"scripts": {
    "dev": "webpack -w"
  },
```

# Webpack (part 02)

- <a href="https://github.com/TypeStrong/ts-loader">ts-loader</a>

- Remember that run <code>npx tsc</code> compiles all things in <code>src</code> to <code>dist</code>

- Remember that run <code>npx webpack -w</code> compiles to the <code>dist</code> folder, too

- The webpack setup described above is for a project with only frontend

- But we can setup webpack to backend or both frontend and backend

- Lets bundle frontend in frontend folder

- To achieve that, we need rename <code>dist</code> folder to <code>frontend</code>

- We need adjust wepback.config.js file

- In this file, we need to adjust ts-loader

- We remain the tsconfig.json, using it only for backend

- We need create a new tsconfig file only for frontend

- We'll call it tsconfig.frontend.json

- tsconfig.frontend.json

```json
// remember that outDir must macthes "output":{path} in webpack.config.js

{
  "compilerOptions": {
    "target": "es2016",
    "lib": ["ES2016", "DOM"],
    "module": "commonjs",

    ////////////
    // CHANGE //
    ////////////
    // "outDir": "./dist/assets/js",
    "outDir": "./frontend/assets/js",

    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": [
    "./src"
  ]
}
```

- Now, we change the webpack.config.js

```js
const path = require('path')

module.exports = {

	mode: 'development',
	entry: './src/section_19/18_webpack/index.ts',

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				////////////
				// CHANGE //
				////////////
				// use: 'ts-loader',
				loader: 'ts-loader',
				options: {
					configFile: 'tsconfig.frontend.json'
				},

				exclude: /node_modules/
			}
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},

	output: {
		filename: 'bundle.js',

		////////////
		// CHANGE //
		////////////
		// path: path.resolve(_dirname, 'dist', 'assets', 'js')
		path: path.resolve(__dirname, 'frontend', 'assets', 'js')
	},

	devtool: 'source-map'
}
```

- To test separate compilation

- frontend compilation **(./src/section_19/18_webpack/index.ts/ -> ./frontend)**

```bash
npx webpack -w
# output -> frontend/ (frontend)
```

- backend compilation **(./src)**

```bash
npx tsc
# output -> dist/ (backend)
```

- Note that the bundled file and compiled files doesn't need to be in repository

- Because they (front and back transpiled files) can be gerated again

- We can summarize these build commands (both front and back) into a script in package.json

- package.json

```json
"scripts": {
	"build:frontend": "webpack -w",
	"build:backend": "tsc"
}
```

- It is better to separate frontend and backend in different projects to avoid confusion

# Validating a form

- We generally needs to install a lib with the declaration files

- Sometipes, these declaration files are installed separatedly

- I have seen that error messages are in <code>span</code> tags

- We use live server VSC extension to see this page in browser

- We can validate fields with REGEX

- But, it is more efficient use a lib to do it: **validator**

- The validator lib doesn't come with declaraction files

- Then, we need to install the types separatedly

- We install it to use typescript types

- Install validator lib and its declarations files

```bash
# -> Install as production dependency
npm i validator
npm i @types/validator
```

- It is useful to install node types

```bash
# -> Install as develoment dependency
npm i @types/node -D
```

- To validate the form

```text
- Check if there is any empty field
- Check if there email is validt
- Check if the passwords match to each other
```

- At this time, we will made validations only with functions

- <code>blur</code> event in html is when we go out an element

# This in function and arrow function

- **this** points/belongs to the scope where the arrow function is defined

- **this** points/belongs to the scope inside the function

- Then, arrow function share the scope where it is defined.

- Then, function create new scope

- <code>call</code> and <code>apply</code> allows pass this in a function

- <code>call</code> and <code>apply</code> allows define what is the this inside a function