function withoutReturn (...args: string[]): void {
	console.log(typeof args)
	console.log(args.join(' '))
}

withoutReturn("Bruno", "Conde")

const person = {
	name: "Bruno",
	lastname: "Conde",

	showName(): void {
		console.log(this.name + ' ' + this.lastname);
	}
}

person.showName()