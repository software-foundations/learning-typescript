export class Calculator {
    constructor(public num: number) {}

    // here, this points to the Calculator instance

    add(n: number): this {
        this.num += n
        return this
    }

    sub(n: number): this {
        this.num -= n
        return this
    }

    div(n: number): this {
        this.num /= n
        return this
    }

    mul(n: number): this {
        this.num *= n
        return this
    }
}

export class ScientifcCalculator extends Calculator {


    // here, this points to the ScientifcCalculator instance
    // But it is not a problem
    pow(n: number): this {
        this.num **= n
        return this
    }
}

const calculator = new Calculator(10)
const scientifcCalculator = new ScientifcCalculator(10)

calculator.add(5).mul(2).div(2).sub(5)
scientifcCalculator.pow(2)

console.log(calculator)
console.log(scientifcCalculator)

///////////////////
// Builder - GOF //
///////////////////

export class RequestBuilder {

    private method: 'get' | 'post' | null = null
    private url: string | null = null

    // note that 'get' | 'post' is subtype of 'get' | 'post' | 'null'
    // ts knows that
    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    // note that string is subtype of string | null
    // any literal type is subtype of string
    // then, i could pass 'get' | 'post' | 'anything' in url type parameter
    setUrl(url: string): this {
        this.url = url
        return this
    }

    send(): void {
        console.log(`Sending data via ${this.method} to ${this.url}`)
    }

}

const request = new RequestBuilder()
request.setUrl('http://www.google.com').setMethod('post').send()
