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