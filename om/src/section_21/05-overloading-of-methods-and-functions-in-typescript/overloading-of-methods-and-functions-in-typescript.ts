type Adder = {
    (x: number): number
    (x: number, y: number): number
    (...arg: number[]): number
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if (args.length > 0) {
        const initialValue: number = 0
        return args.reduce(
            (accum, current) => accum + current, initialValue
        ) + x + (y || 0) // because y can be undefined here
    }

    // because y can be undefined here
    return x + (y || 0)
}

console.log(adder(1))
console.log(adder(1, 2))
console.log(adder(1, 3, 4))
