// -> Way 01
export class Enterprise {

    // here, public is redundant (every property is public by default)
    public readonly name: string //  public is not necessary

    // This way will make the array be immutable
    // private readonly contributors: READONLY Contributor[] = []

    private readonly contributors: Contributor[] = [];
    protected readonly cnpj: string

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

// -> Way 02
export class Contributor {
    constructor(
        // here, public is not redundant. it is necessary
        public readonly name: string,
        public readonly lastName: string
    ) {}
}

const enterprise1 = new Enterprise('Udemy', '11.111.111/0001-11')
const contributor1 = new Contributor('Bruno', 'Conde')
const contributor2 = new Contributor('Paul', 'Johnson')
const contributor3 = new Contributor('Lisa', 'Kane')

enterprise1.addContributor(contributor1)
enterprise1.addContributor(contributor2)
enterprise1.addContributor(contributor3)

// remember structural typing in typescript

enterprise1.addContributor({
    name: 'Michael',
    lastName: 'Jackson'
})

console.log(enterprise1.name)

enterprise1.showContributors()

/*
Contributor { name: 'Bruno', lastName: 'Conde' }
Contributor { name: 'Paul', lastName: 'Johnson' }
Contributor { name: 'Lisa', lastName: 'Kane' }
{ name: 'Michael', lastName: 'Jackson' }
*/

