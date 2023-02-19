@decorator
export class Animal {
	constructor(
		public name: string,
		public color: string
	) {

	}
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