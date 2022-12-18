export abstract class Character {
	protected abstract emoji: string

	constructor(
		protected name: string,
		protected attack: number,
		protected life: number
	) {}

	attackEnemy(character: Character): void {
		this.catchPhrase()		
		character.loseLife(this.attack)
	}

	loseLife(attack: number): void {
		this.life -= attack
		console.log(`${this.emoji} - ${this.name}'s life: ${this.life}`)
	}

	abstract catchPhrase(): void
}

class Warrior extends Character {
	protected emoji = '\u{1F9DD}'
	catchPhrase(): void {
		console.log(this.emoji + " Warrior's attack")
	}
}
class Monster extends Character {
	protected emoji = '\u{1F9DF}'
	catchPhrase(): void {
		console.log(this.emoji + " Monster's attack")
	}
}

const warrior = new Warrior('Bruno', 100, 1000)
const monster = new Monster('Heliar', 87, 1000)

warrior.attackEnemy(monster)
warrior.attackEnemy(monster)

monster.attackEnemy(warrior)
monster.attackEnemy(warrior)
