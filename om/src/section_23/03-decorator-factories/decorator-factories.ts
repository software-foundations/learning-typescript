function invertNameAndColor(param1: string, param2: string) {
	return function <T extends new (...args: any[]) => any>(target: T): T {

		console.log('I am the invertNameAndColor that wraps the', target)

		return class extends target {
			color:  string

			constructor(...args: any[]){
				super(...args)
				this.name = this.reverseString(args[0]) + ` ${param1}`
				this.color = this.reverseString(args[1]) + ` ${param2}`
			}

			reverseString(value: string): string {
				return value.split('').reverse().join('')
			}
		}
	}
}

@invertNameAndColor('Value 1', 'Another value')
export class Animal {
	constructor(
		public name: string,
		public color: string
	) {
		console.log('I am the Animal class')
	}
}

const animal = new Animal('Fish', 'purple')
console.log(animal)

// I am the invertNameAndColor that wraps the [class Animal]
// I am the Animal class
// Animal { name: 'hsiF Value 1', color: 'elprup Another value' }