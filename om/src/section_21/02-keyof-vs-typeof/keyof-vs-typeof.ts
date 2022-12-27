// getting the type of a object dinamically
// it it not 'object' (like javascript)
// it is a typescript keyword
// it acts like
// type ColorsObj = { red: string, green: string blue: string }
type ColorsObj = typeof colorsObj

// getting the keys of a type dinamically
// It is a typescript feature
// it acts like 'red' | 'blue' | 'green'
type ColorKeys = keyof ColorsObj

const colorsObj = {
	red: 'vermelho',
	green: 'verde',
	blue: 'azul'
}

function translateColors(color: ColorKeys , colors: ColorsObj) {
	return colors[color]
}

console.log(translateColors('red', colorsObj))
console.log(translateColors('green', colorsObj))
console.log(translateColors('blue', colorsObj))
