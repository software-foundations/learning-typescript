type MapStringsCallback = (item: string) => string

// export is to works in module mode
// because script modes declare things in global scope
// then, we should use module mode
export function mapStrings(
	arr: string[],
	callback: MapStringsCallback
): string[] {
	
	const newArray: string[] = []

	for (let i = 0; i < arr.length; i++) {

		// ts knows that item is a string
		// because the type of callback is MapStringsCallback
		// and the item parameter is a string		
		const item = callback(arr[i])
		newArray.push(item)
	}

	return newArray
}

const abc = ['a', 'b', 'c']

// ts knows that item is a string
// because the type of callback is MapStringsCallback
// and the item parameter is a string
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())

console.log(abcMapped)