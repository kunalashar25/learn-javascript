// main goal of module pattern is to encapsulate functionality,
// to have private data, and to expose a pubilc API

// Best way to do that is to use functions, they give us private data by deafult
// and allows us to return values which can become our public API

// all data is private as it is inside of the scope of the function
const ShoppingCart = (function () {
	const cart = [];
	const shippingCost = 20;
	const totalPrice = 130;
	const totalQuantity = 5;

	const addToCart = function (product, quantity) {
		cart.push({ product, quantity });
		console.log(`${product} added to cart with quantity ${quantity}`);
	};

	const displayCart = function () {
		console.log(cart);
	};

	// exposing pulicly - public API
	return {
		addToCart,
		cart,
		totalPrice,
		totalQuantity,
	};
})();

ShoppingCart.addToCart('apple', 2); // apple added to cart with quantity 2
console.log(ShoppingCart); // {cart: Array(1), totalPrice: 130, totalQuantity: 5, addToCart: ƒ}
