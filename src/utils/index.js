export const totalPrice = (products) => {
	return products.reduce((prev, curr) => prev + curr.price, 0)
}