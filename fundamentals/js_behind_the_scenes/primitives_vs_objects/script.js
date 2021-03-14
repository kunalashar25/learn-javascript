'use strict';
// Primitives example
let age = 30;
let oldAge = age;

age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// Object example
const me = {
  name: 'Kelvin',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me); // {name: "Kelvin", age: 27}
console.log(friend); // {name: "Kelvin", age: 27}

// const are Immutable only for Primitive Types and not for Reference Types
// Refer /fundamentals/js_behind_the_scenes/primitives_vs_objects/primitive_vs_objects.txt

// ---------------------------------------------------------------------------------------------------------------------------------

let lastName = 'William';
let oldLastName = lastName;

lastName = 'Thomas';
console.log(lastName); // Thomas
console.log(oldLastName); // William

const jessica = {
  firstName: 'Jess',
  lastName: 'William',
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Thomas';

console.log('Before Marriage', jessica); // Before Marriage {firstName: "Jess", lastName: "Thomas"}
console.log('After Marriage', marriedJessica); // After Marriage {firstName: "Jess", lastName: "Thomas"}

// A new object was not created in the heap. Both holds Reference to the original object.
// Refer /concept_images/js_behind_the_scene/primitive_vs_object_memory_storage.png

// Copying Objects

const jessica2 = {
  firstName: 'Jess2',
  lastName: 'William2',
};

// creating a new object instead of sharing the reference
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Changed Last Name';

// Object.assign() only creates a shallow copy. Will copy properties only at first level.
// If there are nested objects then it'll not createa copy. It'll simply point to the reference.

console.log('Before Marriage', jessica2); // Before Marriage {firstName: "Jess2", lastName: "William2"}
console.log('After Marriage', jessicaCopy); // After Marriage {firstName: "Jess2", lastName: "Changed Last Name"}

// ---------------------------------------------------------------------------------------------------------------------------------

// Shallow Copy Example

const jessica3 = {
  firstName: 'Jess3',
  lastName: 'William3',
  family: ['alice', 'bard'],
};

const jess3Copy = Object.assign({}, jessica3);
jess3Copy.lastName = 'Davis3';
console.log('Before Marriage', jessica3); // Before Marriage {firstName: "Jess3", lastName: "William3", family: Array(2)}
console.log('After Marriage', jess3Copy); // After Marriage {firstName: "Jess3", lastName: "Davis3", family: Array(2)}

jess3Copy.family.push('john');
jess3Copy.family.push('charles');

// Both objects have 4 family members now
console.log('Before Marriage', jessica3); // Before Marriage {firstName: "Jess3", lastName: "William3", family: Array(4)}
console.log('After Marriage', jess3Copy); // After Marriage {firstName: "Jess3", lastName: "Davis3", family: Array(4)}

// Deep clone is possible using external library - lodash
