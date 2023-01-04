// ts (in background) uses generics to infer that is the number[]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type FilterCallback<U> = (
	value: U,
	index?: number,
	array?: U[]
) => boolean

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
	const newArray: T[] = []
	for (let i = 0; i < array.length; i ++) {
		if (callbackfn(array[i])) {
			newArray.push(array[i])
		}
	}
	return newArray
}

const lessThan5 = (value: any) => {
	// Refining the type is no more necessary
	// Because the generic type is passed through the function calls
	// if (typeof value === 'number') return value < 5
	// return false
	return value < 5
}

console.log(myFilter(array, (value) => {
	// Refining the type no more necessary
	// Because the generic type is passed through the function calls
	// if (typeof value === 'number') return value < 5
	// return false

	return value < 5
})) // [1, 2, 3, 4]

console.log(myFilter(array, lessThan5)) // [1, 2, 3, 4]