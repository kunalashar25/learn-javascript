// all modules executed in strict mode by default

// Importing Named Exports
// we can also change names during import
import { addToCart, items, totalPrice as price } from './shoppingCart.js';

console.log('Importing Module');
// shoppingCart.js:2 Exporting Module
// script.js:4 Importing Module

// since variable are private, we cannot write below statement
// console.log(shippingCost);  Uncaught ReferenceError: shippingCost is not defined
addToCart('laptop', 5); // laptop added to cart with quantity 5

// imported Named exports
console.log(items, price); // 20 2500

// we can also import everthing from a module together
import * as ShoppingCart from './shoppingCart.js';
console.log(ShoppingCart.items); //20

// ------------------------------------------------------------------------------------------------

// Importing Default Exports
// name can be anything
import fn from './shoppingCart.js';
fn(); // this is from default export

// we can combine default and names exports together
// also, import is not simply the copy of the value that is being export
// it contains all the latest values and points to the same place in the memory
import dfn, { cart } from './shoppingCart.js';
console.log(cart); // length 1

// adding two more items to the cart to prove above point
addToCart('laptop2', 5);
addToCart('laptop3', 5);

// if import was pointing to old cart then value should not have been updated.
console.log(cart); // length 3
