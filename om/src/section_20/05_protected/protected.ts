
export class Enterprise {

    public readonly name: string

    // It is protected to access it in subclasses of Enterprise (eg: Udemy)
    protected readonly contributors: Contributor[] = [];

    private readonly cnpj: string

    constructor(name: string, cnpj: string) {
        this.name = name
        this.cnpj = cnpj
    }

    public addContributor(contributor: Contributor): void {
        this.contributors.push(contributor)
    }

    public showContributors(): void {
        for (const contributor of this.contributors) {
            console.log(contributor)
        }
    }
}

export class Udemy extends Enterprise {
	constructor() {
		super('Udemy', '11.111.111/0001-11')
	}

	popContributor(): Contributor | null {
		const contributor = this.contributors.pop()
		if (contributor) return contributor
		return null

	}
}

export class Contributor {
    constructor(        
        public readonly name: string,
        public readonly lastName: string
    ) {}
}

const udemy = new Udemy()
const bruno = new Contributor('Bruno', 'Conde')
udemy.addContributor(bruno)

const poppedContributor = udemy.popContributor()

console.log(poppedContributor)
console.log(udemy)