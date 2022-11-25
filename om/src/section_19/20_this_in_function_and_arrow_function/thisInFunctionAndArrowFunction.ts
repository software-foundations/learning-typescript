export function fn(this: Date, name: string, age: number): void {
	console.log(this)
	console.log(name)
	console.log(age)
}

// works
fn.call(new Date(), 'Bruno', 100)
fn.apply(new Date(), ['Bruno', 100])
// fn('Bruno', 100) // does not work
