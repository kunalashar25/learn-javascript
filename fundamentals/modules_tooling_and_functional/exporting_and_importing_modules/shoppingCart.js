// Exporting Module
console.log('Exporting Module');

// all top level variables are private
const shippingCost = 10;
export const cart = [];

// to use variable in other modules, we need to export it from here

// Two types of Export:
// 1. Named Export
// 2. Defult Export

// ------------------------------------------------------------------------------------------------

// Named Exports

// write import statement with exact same name to import it in other modules
export const addToCart = function (product, quantity) {
	cart.push({ product, quantity });
	console.log(`${product} added to cart with quantity ${quantity}`);
};

// export always need to happen in top level code else we'll get error
if (true) {
	// Uncaught SyntaxError: Unexpected token 'export'
	// export const addToCart = function (product, quantity) {};
}

// We can export multiple things using Named export at a same time
const totalItems = 20;
const totalPrice = 2500;

// we can also rename variables while export
export { totalItems as items, totalPrice };

// ------------------------------------------------------------------------------------------------

// Default Exports

// Used when we want to export only one thing per module
// We are just exporting the funtion, there is no name involved
// while importing we can give any name we want

export default function () {
	console.log('this is from default export');
}
