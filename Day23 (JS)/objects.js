// Object - collection of labelled data
// A JS Object is exact same thing: a container for named values , whick we call key: value pairs data
// * Key is the label (a string or symbol)
// * Value is the data (it can be data of any type (number, string , boolean, float, double, an array or even another object))

// Const ObjName = { "key" : "value" };  - Object literal syntax ( curly Braces {})
// The keys and values of the objects are saved/stored as strings in JS memory

// Object CRUD
// Create

const empty = {};
console.log(empty)

const user = {
    name: "Gaurav",
    age: 20,
    isStudent: true,
    "home address": "Pune"  // it gives error when putting the key without " ", it helps to access with bracket notation because dot notataion cannot identify it
}

// Read
console.log(user);
// Dot notation(.) - simple and easy to read -> dot only works for valid keys identifiers (no spaces, hyphens, or starting with number)
console.log(`user.name - `, user.name);
// Braket notation (["Key"]) - more powerful and flexible way, key inside [] is a 'string'
// Also allows you to use a variable to determine which property to access
console.log(`user['name'] - `, user["name"]);
// const address = user["home address"];
// console.log(`Home Address - `, address);
const address = "home address";
console.log(`Home Address - `, user[address]);

// Update or add new keys
user.email = "gaurav@example.com"   // not present add this key in object
console.log(`email added `, user);

user.age = 21;  // present so updates the age in object
console.log(`Changed age `, user);

// Delete
delete user.isStudent;
console.log(`delete user.isStudent `, user);
delete user["email"];
console.log(`delete user["email"] `, user);




// Modern Methods of Objects
// Object. keys, values, entries -> these methods return array of objects own property keys, values and ['key', 'value] pairs resp.
const car = {
    brand: "Rolls Royce",
    model: "Cullinan",
    year: 2025
}

console.log(`Object.keys(car) - `, Object.keys(car));    // [ 'brand', 'model', 'year' ]
console.log(`Object.values(car) - `, Object.values(car));   // [ 'Rolls Royce', 'Cullinan', 2025 ]
console.log(`Object.entries(car) - `, Object.entries(car));     // [ [ 'brand', 'Rolls Royce' ], [ 'model', 'Cullinan' ],[ 'year', 2025 ] ]


// Objects with methods
// when a function is a value inside an object it is called Method
// Inside a method if this keyword is called then it refers to the object that the method was called on

const greet = {
    name: "Aryan",
    sayHello: function () {
        // console.log(`this ` ,this);  // this refers to the greet object
        console.log(`Hello ${this.name}`);      // we dont use greet.name because if we create a copy then it refers this name only
        return 200;
    }
}

console.log(greet);
// greet.sayHello();
const val = greet.sayHello();
console.log(`val`, val)

const obj2 = {
    name: "Rahul",
    sayHello: greet.sayHello
}
console.log(`obj2 `, obj2)
obj2.sayHello();        // this refers to obj2 hence name is from obj2



// Looping on Over object properties
// For-in loop (old way)

const bike = {
    brand: "Honda",
    model: "Shine",
    year: 2025
}

for (let key in bike) {
    console.log(`Key: ${key}, value: ${bike[key]}`);
}

// For-of loop - The modern Object.keys, values, entries returns an array which can be used to iterate over the object

const keys = Object.keys(car);      // [ 'brand', 'model', 'year' ]
const entry = Object.entries(car);

for (const key of keys) {
    console.log(key);
}

for (const [key, val] of entry) {
    console.log(`Key: ${key}, value: ${val}`);
}



// Advanced Concepts (copy of Object)
const myObj = {
    name: "Aman",
    age: 30,
    profession: "Teacher",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
}
console.log(`Original myObj `, myObj);

// console.log(`------Normal Copy---------`);
// Normal Copy of the object refers to the object and does not make a copy
// const normalCopy = myObj;   // reference to myObj
// normalCopy.name = "Amit";
// console.log(`normalCopy `, normalCopy);
// console.log(`myObj (name changed) `, myObj);   // changes the name

// console.log(`------Shallow Copy (only top level copy is made)---------`);
// Shallow Copy of the object only makes copy of the top level properties and the nested properties refers to that same object
// const ShallowCopy = { ...myObj };   // makes as copy of top level properties and references to myObj for nested properties
// ShallowCopy.name = "Amit";
// console.log(`shallowCopy `, ShallowCopy);
// console.log(`myObj (name not changed) `, myObj);   // no change in the name
// ShallowCopy.address.city = "Varanasi";
// console.log(`shallowCopy `, ShallowCopy);
// console.log(`myObj (city changed) `, myObj);   // changes the city of myObj


console.log(`------Deep Copy (whole/independent copy of an object)---------`);
// Deep Copy of the object makes copy of that same object
// structuredClone(Object) - creates an independent object using the Structured Clone Algorithm
// StructuredClone cannot clone 1) functions - throws 'DataCloneError' functions have a scope and are not considered simple data
// 2) DOM Nodes - piece of webpage, 3) Class Instances(Proptotype) ,  4) Error Objects 
const deepCopy = structuredClone(myObj);   // makes a complete copy of myObj
deepCopy.name = "Amit";
console.log(`deepCopy `, deepCopy);
console.log(`myObj (name not changed) `, myObj);   // no change in the name
deepCopy.address.city = "Varanasi";
console.log(`deepCopy `, deepCopy);
console.log(`myObj (city not changed) `, myObj);   // changes the city of myObj



// Store numbers as keys in object
const Obj = {
    name: "Arjun",
    age: 30,
    0: 10,
    "4": 30
}
console.log(`Obj.name `, Obj.name);
console.log(`Obj.age `, Obj.age);
// console.log(Obj.0)       // no dot operator only bracket notation can be used to access number keys
console.log(`Obj[0] `, Obj[0]);
console.log(`Obj['0'] `, Obj['0']);
console.log(`Obj[4] `, Obj[4]);

// Making copy of Objects

// const copyObj = Object.assign(Obj);  // Object.assign() copies the values by reference of the Obj
const copyObj = Object.assign({}, Obj);     // Objet.assign({}, Obj) creates a shallow copy like spread operator
console.log(`copyObj `, copyObj);
copyObj.age = 50;
console.log(`copyObj age=50 `, copyObj);
console.log(`Obj `, Obj);

// ES6+ Syntax - Object creation and method declaration
const name = "Alice";
const age = 20;

const OldwayObject = { name: name, age: age };
console.log(`OldMethodObject `, OldwayObject);

const newwayObject = { name, age };
console.log(`newMethodObject `, newwayObject);

// Method declaration - we can omit the function keyword

const oldwayMethod = {
    sayHi: function () {
        console.log(`"SayHi(): function(){}" Hi from Old way method`);
    }
}
oldwayMethod.sayHi();

const newwayMethod = {
    sayHi() {
        console.log(`"SayHi() {}"  Hello hi from new way method syntax`);
    }
}
newwayMethod.sayHi();

// Computed property names: Use a variable as a property key during creation by putting it in brackets.

const propertyname = 'email';
const Person = {
    name: "Vijay",
    [propertyname]: "vijay@example.com"
}
console.log(Person);

// Why for-in loop is avoided - it is less safe than Object methods ->  Can cause bugs by iterating over the prototype chain. The other methods are safer.
const man = {
    name: "Charlie",
    age: 25
}
// Object.prototype.isInherited = true;
// for-in loop
for (const key in man) {
    console.log(key);   // It show the isInherited key also in the keys -   name age isInherited
}

// Object property
console.log(`man keys `, Object.keys(man));     //  [ 'name', 'age' ]

// Limitations of Structured Clone
console.log(`---------Limitations of Structured Clone-------`);
const original = {
    name: "Ayaan",
    sayHello() {
        console.log(`Hello ${name}`);
    }
}

try {
    const structClone = structuredClone(original);
    console.log(`structClone `, structClone);
} catch (err) {
    console.error(err.name);
    console.log(err.message);
}


// Destructuring
console.log(`\n--------Destructuring-------`);
// Destructuring is a powerfull syntax for "unpacking" values from arrays or properties from objects into a distinct variables.
// It makes code much cleaner and more readable


const obj = {
    name: "Ajay",
    age: 20,
    profession: "Software engineer",
    profile: {
        isAdmin: true
    }
};


// Old way
const username = obj.name;
const userage = obj.age
const prof = obj.profession;
console.log(`Old way`);
console.log(`obj.name ${username}, obj.age ${userage}, obj.profession ${prof}`)


// New way
console.log(`New Way`)
const { name: userName, profession: work } = obj;
console.log(userName, work);
// const [ten, twenty] = arr;
// console.log(twenty, ten);
// Set default values 
const { role = "Admin" } = obj;
console.log(`default value `, obj.name, role);
// nested Destructuring
const { profile: { isAdmin } } = obj;
console.log(`{profile: {isAdmin}}`, isAdmin);


// Array destructure

const scores = [10, 20, 30, 40, 50];

const [first, , third, , fifth] = scores;
console.log(fifth, third, first);

// Use Symbol  - a secret key which will never crash with other key
// A symbol is a unqiue & immutable primitive datatype used as unique property key for an Object,
// useful for preventing naming collisions when you add properties to an object that you dont control or for defining "meta" properties

const symb1 = Symbol('id');
const symb2 = Symbol('id');
console.log(symb1 == symb2);     // false, they are completely unique


// const Book = { name: "The wings of Fire" };
const BookId = Symbol('id');
const Book = {
    name: "The wings of Fire",
    [BookId]: "abcd-1234"
};
// Book[BookId] = "xyz-123-abc";
console.log(Book);
console.log(`Book[BookId] `, Book[BookId]);     // abcd-1234
console.log(`Book['BookId'] `, Book['BookId']);     // undefined

// This ensures that your BookId property will never accidentally conflict with a potential future property named "BookId".

// Symbols are hidden in normal iteration
console.log(Object.keys(Book));         // [ 'name' ] , no BookId is shown

for (const key in Book) {
    console.log(key);       // name
}

// To get symbol properties we need to use special methods
const symbolKeys = Object.getOwnPropertySymbols(Book);
console.log(`symbolKeys `, symbolKeys);
console.log(`Book[symbolKeys[0]] `, Book[symbolKeys[0]]);