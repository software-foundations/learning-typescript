type VotationOption = {
	numberOfVotes: number
	option: string
}

export class Votation {
	private _votationOptions: VotationOption[] = []
	constructor(public details: string) {}

	addVotationOption(votationOption: VotationOption): void {
		this._votationOptions.push(votationOption)
	}

	vote(votationIndex: number): void {
		if (!this._votationOptions[votationIndex]) return
		this._votationOptions[votationIndex].numberOfVotes += 1
	}

	getVotationOptions(): VotationOption[] {
		return this._votationOptions
	}
}

export class VotationApp {
	private votations: Votation[] = []

	addVotation(votation: Votation): void {		
		this.votations.push(votation)
	}

	showVotations() {
		for (const votation of this.votations) {
			console.log(votation.details)
			for (const votationOption of votation.getVotationOptions()) {
				console.log(votationOption.option, votationOption.numberOfVotes)
			}
			console.log('################')
			console.log('')
		}
	}
}

const votation1 = new Votation('What is your favorite programming language?')
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0})
votation1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0})
votation1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0})

votation1.vote(1) // JavaScript
votation1.vote(1) // JavaScript
votation1.vote(0) // Python
votation1.vote(0) // Python
votation1.vote(0) // Python
votation1.vote(2) // TypeScript

const votation2 = new Votation('What is your favorite color?')
votation2.addVotationOption({ option: 'Black', numberOfVotes: 0})
votation2.addVotationOption({ option: 'Blue', numberOfVotes: 0})
votation2.addVotationOption({ option: 'Red', numberOfVotes: 0})

votation2.vote(0) // Black
votation2.vote(0) // Black
votation2.vote(0) // Black
votation2.vote(1) // JavaScript
votation2.vote(1) // JavaScript

const votationApp = new VotationApp()

votationApp.addVotation(votation1)
votationApp.addVotation(votation2)
votationApp.showVotations()
