export class ShoppingCart {
	private readonly products: Product[] = []

	// rest operator allows receice one product or an array
	addProduct(...products: Product[]): void {
		for (const product of products) {
			this.products.push(product)
		}
	}

	amountOfProducts(): number {
		return this.products.length
	}

	totalPrice(): number {
		return this.products.reduce(
			(accum, current) => accum + current.price, 0
		)
	}
}

export class Product {
	constructor(
		public name: string,
		public price: number
	) {}

}

const tShirt = new Product('t-shirt', 48)
const pen = new Product('pen', 2.50)
const backpack = new Product('backpack', 50)

const shoppingCart = new ShoppingCart()
shoppingCart.addProduct(tShirt, pen, backpack)
console.log(shoppingCart.totalPrice())
console.log(shoppingCart.totalPrice())