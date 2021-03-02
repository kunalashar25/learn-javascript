const jonas = {
    firstName: 'Jonas',
    lastName: 'Peter',
    age: 2021 - 1991,
    job: 'teacher'
};

// get property form object using dot
console.log(jonas.lastName); // Peter

// get property form object using bracket
console.log(jonas['lastName']);// Peter

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // Jonas

// get key from the enduser that we want to print on the console
const propKey = prompt('Which value do you want to print?');
console.log(jonas[propKey]); // 30

// We get undefined when we are trying to access a property that does not exist
console.log(jonas.career); // undefined

// undefined is a false condition
if (jonas['location'])
    console.log('printing location');
else
    console.log('location property does not exist');
// location property does not exist

// add new property to the object
jonas.location = 'Mumbai';
jonas['gender'] = 'Male'
console.log(jonas); // {firstName: "Jonas", lastName: "Peter", age: 30, job: "teacher", location: "Mumbai", gender: "Male"}
console.log(jonas.location); // Mumbai

const user = {
    firstName: 'Jonas',
    bestFriend: 'Michael',
    friends: ['Kelvin', 'Peter', 'Charlie']
}

console.log(`${user.firstName} has ${user.friends.length} friends, and his best frined is called ${user.bestFriend}`);
// Jonas has 3 friends, and his best frined is called Michael
