type MyType = number

export const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5]
console.log(arrayOfNumbers)

async function promiseAsync() {
	return 1
}

function myPromise(): Promise<MyType> {
	return new Promise((resolve, reject) => {
		setTimeout(() => { resolve(1) }, 3000)
	})
}

promiseAsync().then( result => console.log(result + 1) ) // 2
myPromise().then( result => console.log(result + 1) ) // 2
