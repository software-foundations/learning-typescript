# Class decorators in TypeScript

- A decorator is an impostor object

- It pretends be another object

- We call this decorate an object

- Pretends can mean observe, modify, or replace the original object

- Decorators are functions

- Decorators add behavior

- Example

```typescript
export class Animal {
    constructor(public color: string) {}
}

// It is a decorating funciton
function decorator(target: any): any {
    console.log('>>> Passed here')
    return target
}

const DecoratedAnimal = decorator(Animal)

const animal = new DecoratedAnimal('purple');

console.log(animal)
// >>> Passed here
// Animal { color: 'purple' }
```

- Example

```typescript
@decorator
export class Animal {
    constructor(
        public name: string,
        public color: string
    ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {

    return class extends target {
        color:  string

        constructor(...args: any[]){
            super(...args)
            this.name = this.reverseString(args[0])
            this.color = this.reverseString(args[1])
        }

        reverseString(value: string): string {
            return value.split('').reverse().join('')
        }
    }
}

const DecoratedAnimal = decorator(Animal)

// We can achieve this by using an @decorator
// const animal = new DecoratedAnimal('Fish', 'purple')

const animal = new Animal('Fish', 'purple')
console.log(animal) // Animal { name: 'hsiF', color: 'elprup' }
```

# When a class decorator is called

- It is a function
- It is a wrapper
- And it wraps the contructor function of the class


```bash

# It is the decorator definition
I am the invertNameAndColor that wraps the  [class Animal]

# It is the Animal Class, that is wrapped by the decorator
I am the Animal class
Animal { name: 'hsiF', color: 'elprup' }
```

- Remember that a class is a function in TypeScript

- According to <a href="https://betterprogramming.pub/introduction-to-typescript-classes-definition-and-inheritance-238a44c52dc4#:~:text=Classes%20in%20TypeScript%2C%20like%20JavaScript,keyword%20from%20these%20other%20languages.">betterprogramming</a>

> Classes in TypeScript, like JavaScript, are a special syntax for its prototypical inheritance model, which is comparable to inheritance in class-based object-oriented languages. Classes are just special functions added to ES6 that are meant to mimic the class keyword from these other languages.

# Decorator Factories

- See <a href="https://www.typescriptlang.org/docs/handbook/decorators.html">Documentation</a>

- Basically, it says that we can use nested decorators

- Basically, we can use a factory function which returns the decorator itself

- Then, the decorator is wrapped by another one

# Decorator Composition

- It is about nested decorators

```typescript
@decorator2('Value 2')
@decorator1('Value 1')
class Animal {
    // code
}
```

- See that We can use factory decorators and decorator composition at the same time

# Method decorator

- Obs: we generally loose typing when using decorators

- Decorators is experimental in TypeScript

```typescript
export function decorator(
    classPrototype: any,
    methodName: string,
    propertyDescriptor: PropertyDescriptor
): any {
    console.log('classPrototype:', classPrototype)
    console.log('methodName:', methodName)
    console.log('propertyDescriptor:', propertyDescriptor)    
}

class Person {

    @decorator
    sayHello()
}
```

- We can use a method decorator to assist or to edit the method

# Parameter Decorator

- We can decore classes parameters

- It only works to assist as a parameter is/have

- The classPrototype is the class itself

- The constructor methodName is undefined

- The first parameter has index 0; second 1; and so on

```typescript
function decorator(
    classPrototype: any,
    methodName: string | symbol,
    index: number
): any {
    console.log('------ start param decorator')
    console.log('classPrototype: ', classPrototype)
    console.log('methodName: ', methodName)
    console.log('index: ', index)
    console.log('------ end param decorator')
    return "anything"
}

export class Person {
    name: string
    age: number

    constructor(@decorator name: string, @decorator age: number) {
        this.name = name
        this.age = age
    }

    greeting(@decorator message: string): string {
        return `Hi, my name is ${this.name}. I am ${this.age} years old. ${message}`
    }
}

const person = new Person('Bruno', 26)

// person.greeting = () => 'Heeeeey'

// We can do that because the method is writable by default
// by setting 'writable: false', js (not ts. Is is one of the reasons it is experimental) doesn't leave us do that anymore

const response: string = person.greeting('You are wellcome')
console.log(response)
```

- output

```
------ start param decorator
classPrototype:  {}
methodName:  greeting
index:  0
------ end param decorator
------ start param decorator
classPrototype:  [class Person]
methodName:  undefined
index:  1
------ end param decorator
------ start param decorator
classPrototype:  [class Person]
methodName:  undefined
index:  0
------ end param decorator
Hi, my name is Bruno. I am 26 years old. You are wellcome
```

# Property decorator

```typescript
function propertyDecorator(
    classPrototype: any,
    name: string | symbol
): any {
    console.log('------ start property decorator')
    console.log('classPrototype: ', classPrototype)
    console.log('name: ', name)
    console.log('------ end property decorator')

    let myCustomPropertyValue: any
    
    // return a propertyDescriptor      
    // property descriptor must be an object    
    return {
        get: () => myCustomPropertyValue,
        set: (value: any) => {

            // type guargind
            if (typeof value === 'string') {
                myCustomPropertyValue = value
                    .split('').reverse().join('')
                return
            }

            myCustomPropertyValue = value
        }
    }
}

export class Person {

    @propertyDecorator
    name: string

    // will raise TypeError: value.split is not a function
    // it occurs in JavaScript runtime
    // then, it is not catched by TypeScipt
    // that's why decorator is an experimental feature
    // we can deal with it by make type guarding
    @propertyDecorator
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greeting(message: string): string {
        return `Hi, my name is ${this.name}. I am ${this.age} years old. ${message}`
    }
}

const person = new Person('Bruno', 26)

const response: string = person.greeting('You are wellcome')
console.log(response)
```

- output

```
------ start property decorator
classPrototype:  {}
name:  name
------ end property decorator
------ start property decorator
classPrototype:  {}
name:  age
------ end property decorator
Hi, my name is onurB. I am 26 years old. You are wellcome
```
