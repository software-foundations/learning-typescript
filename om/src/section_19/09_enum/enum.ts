enum Colors {
	RED, // 0
	BLUE, // 1
	YELLOW, // 2
	PURPLE = 'PURPLE',
	// GREEN // Enum member must have initializer
	GREEN = 201,
	PINK
}

// We can mergen enums
enum Colors {
	BLACK = 300,
	BROWN
}

console.log(Colors)
console.log(Colors.RED) // 0
console.log(Colors[0]) // RED
console.log(Colors.PURPLE) // PURPLE
console.log(Colors['PURPLE']) // PURPLE
console.log(Colors.PINK) // 202
console.log(Colors.BROWN) // 301

enum clients {
	BRUNO = 1, // 1
	PAUL // 2
}

console.log(clients.PAUL) // 2

enum names {
	BRUNO = 100,
	CONDE = 200
}

console.log(names.BRUNO) // 100
console.log(names[0]) // undefined - will not raise an error

///////////
// We can use a enum as a type of a parameter of a function/method
function chooseColor(color: Colors): void {
	console.log(Colors[color])
}

chooseColor(Colors.RED) // RED

// It is a strange behavior in enum in TS
chooseColor(123123123123) // undefined