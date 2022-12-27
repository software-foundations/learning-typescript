export function add(a: unknown, b: unknown) {
    // a: any, b: any -> ts cannot infer the
    if (typeof a === 'number' && typeof b === 'number') return a + b
    return `${a}${b}`
}

console.log(add(1, 5)) // 6 - number
console.log(add('1', '5')) // 15 - string

type Person = {
    // Literal type === person
    type: 'person'
    name: string
}

type Animal = {
    type: 'animal'
    color: string
}

type PersonOrAnimal = Animal | Person

export class Student implements Person {
    type: 'person' = 'person'
    constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {

    // it ensures that the objet is a person and nor an animal
    // type guarding checking a property name
    if ('name' in obj) {
        console.log(obj.name)
    }

    // type guarding checking a Type
    if (obj instanceof Student) {
        console.log(obj.name)
    }

    switch(obj.type) {
        case 'person':
            console.log('It is a person: ', obj.name)
            return
        case 'animal':
            console.log('It is an animal: ', obj.color)
            return
    }
}

showName(new Student('John'))
showName({ type: 'animal', color: 'blue'})

// 6
// 15
// John
// John
// It is a person:  John
// It is an animal:  blue
