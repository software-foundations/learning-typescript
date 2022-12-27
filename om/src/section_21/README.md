# Type Guard (refining types)

- Assert type using ifs statements makes the ts understand the type

- types has no conflicts between different files when there'is a module export used in a class/function/const/etc

```typescript
// 6
// 15
// John
// John
// It is a person:  John
// It is an animal:  blue
```

# keyof vs typeof

- It is about types

- <code>typeof</code> gets the type (not js, but ts types) of an object dinamically

- <code>keyof</code> gets the type of the keys of an object (not js, but ts types) of an object dinamically

```typescript
// getting the type of a object dinamically
// it it not 'object' (like javascript)
// it is a typescript keyword
// it acts like
// type ColorsObj = { red: string, green: string blue: string }
type ColorsObj = typeof colorsObj

// getting the keys of a type dinamically
// It is a typescript feature
// it acts like 'red' | 'blue' | 'green'
type ColorKeys = keyof ColorsObj

const colorsObj = {
	red: 'vermelho',
	green: 'verde',
	blue: 'azul'
}

function translateColors(color: ColorKeys , colors: ColorsObj) {
	return colors[color]
}

console.log(translateColors('red', colorsObj))
console.log(translateColors('green', colorsObj))
console.log(translateColors('blue', colorsObj))
```

# Using keys of types

- It is about use keys of types

- It avoids duplications

- It is about reuse types in another types that shares some types

- We can access the type of a specific key in a type alias a this way

```typescript
type Person {
	name: string
}

type Player {
	name: Person['name'] // <- Here occurs accessing type of the keys of another type
	life: number
}
```

- Another example

```typescript
type Vehicle = {
	brand: string
	year: number
}

type Car = {
	// getting keys of types
	brand: Vehicle['brand'] // string
	year: Vehicle['year'] // number
	name: string
}

const car: Car = {

	brand: 'Ford',
	year: 2022,
	name: 'ABC'
}

console.log(car)
```

# Using this as a type

- We can associate this with the builder design pattern

- It aims to build the object by parts

```typescript
export class Calculator {
    constructor(public num: number) {}

    // here, this points to the Calculator instance

    add(n: number): this {
        this.num += n
        return this
    }

    sub(n: number): this {
        this.num -= n
        return this
    }

    div(n: number): this {
        this.num /= n
        return this
    }

    mul(n: number): this {
        this.num *= n
        return this
    }
}

export class ScientifcCalculator extends Calculator {


    // here, this points to the ScientifcCalculator instance
    // But it is not a problem
    pow(n: number): this {
        this.num **= n
        return this
    }
}

const calculator = new Calculator(10)
const scientifcCalculator = new ScientifcCalculator(10)

calculator.add(5).mul(2).div(2).sub(5)
scientifcCalculator.pow(2)

console.log(calculator)
console.log(scientifcCalculator)

///////////////////
// Builder - GOF //
///////////////////

export class RequestBuilder {

    private method: 'get' | 'post' | null = null
    private url: string | null = null

    // note that 'get' | 'post' is subtype of 'get' | 'post' | 'null'
    // ts knows that
    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    // note that string is subtype of string | null
    // any literal type is subtype of string
    // then, i could pass 'get' | 'post' | 'anything' in url type parameter
    setUrl(url: string): this {
        this.url = url
        return this
    }

    send(): void {
        console.log(`Sending data via ${this.method} to ${this.url}`)
    }

}

const request = new RequestBuilder()
request.setUrl('http://www.google.com').setMethod('post').send()
```

# Overloading of methods and functions in Typescript

- Based by the signature of the function i can make the function behave differently

- It is easy with types

- In ts, overloads exists only about types

- So, we can declare a type that holds function/method signatures

- Using this assumes that the function behave in different ways

- Then, it is a bad idea to do in code

- It is commonly used in third party code


```typescript
type Adder = {
    (x: number): number
    (x: number, y: number): number
    (...arg: number[]): number
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if (args.length > 0) {
        const initialValue: number = 0
        return args.reduce(
            (accum, current) => accum + current, initialValue
        ) + x + (y || 0) // because y can be undefined here
    }

    // because y can be undefined here
    return x + (y || 0)
}

console.log(adder(1))
console.log(adder(1, 2))
console.log(adder(1, 3, 4))
```

# Optional chaining (js feature) and null coalescence operator

- They are powerful

- They are more powerful when used together

- It aims to avoid many ifs in code

- Optional chaining <code>?</code> continues the line of code if the variable is not undefined

- Null coalescence operator <code>??</code> checks if the left variable is a non-value (null | undefined)

- If it is a non-value, then the right side of the sentence is executed

- Else, the lef side of the sentence is executed

```typescript
type MyDocument = {
    title: string
    text: string
    date?: Date
}

const myDocument: MyDocument = {
    title: 'Title',
    text: 'Text'
}

const myDocument2: MyDocument = {
    title: 'Title',
    text: 'Text',
    date: new Date()
}


// myDocument.date === undefined here
// Then, it throws an error
// Then, we use ? to check if the date exists

console.log(myDocument.date?.toDateString()) // undefined
console.log(myDocument2.date?.toDateString()) // current date - Wed Dec 28 2022


// Null coalescence operator
console.log(
    myDocument.date?.toDateString() ?? 'null or undefined') // null | undefined

console.log(
    myDocument2.date?.toDateString() ?? 'null pr undefined') // current date - Wed Dec 28 2022

console.log(false ?? 'null or undefined') // false

console.log(0)

console.log('' ?? 'null or undefined') //

console.log('-' ?? 'null or undefined') // -
```