function withoutReturn(...args: string[]): void {
    console.log(args.join(' '))
}

const person = {
    name: 'Bruno',
    lastName: 'Conde',
    showName(): void {
        console.log(this.name + ' ' + this.lastName)
    }
}

person.showName()

withoutReturn('Bruno', 'Conde')

// we export this object to avoid global scope colision (script mode)
export { person }
