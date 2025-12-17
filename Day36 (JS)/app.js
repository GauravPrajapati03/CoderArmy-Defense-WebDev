
const Obj = {
    name: "Aman",
    age: 30,
    greet: function () {
        console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
    }
}

// console.log(Obj);
// console.log(Obj.name);
// Obj.greet();

// console.log(Obj.__proto__);
// console.dir(Obj.__proto__);

// console.log(Obj.hasOwnProperty("name"));     // we have not created this method but it is present
// console.log(Obj.hasOwnProperty("account"));
// console.log(Obj.toString());    // [object Object]

const Obj2 = {
    account: 300
}

// now name is also in the Obj2 from Obj
Obj2.__proto__ = Obj;
// console.log(Obj2.account);
// console.log(`Obj2.name from Obj `, Obj2.name);

const arr = [10, 20, 30];
// console.log(arr.length);
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);


function greet() {
    console.log("Hello World");
}

// greet();
// console.dir(greet.__proto__);
// console.dir(greet.__proto__.__proto__);


// console.log(Array.prototype);
// console.log(arr.__proto__);

// console.log(Function.prototype.__proto__);
// console.log(greet.__proto__.__proto__);

// Problem - here we have 3 objects and each object has a name, age and a function sayHi now we can see tha the names and ages are different but the function is same so we should write it only once

const Person1 = {
    name: "Amit",
    age: 30,
    sayHi: function () {
        console.log(`Hello ${name}`);
    }
}

const Person2 = {
    name: "Aman",
    age: 32,
    sayHi: function () {
        console.log(`Hello ${name}`);
    }
}

const Person3 = {
    name: "Ajay",
    age: 28,
    sayHi: function () {
        console.log(`Hello ${name}`);
    }
}

// console.log(Person1);
// console.log(Person2);
// console.log(Person3);


// Solution to the problem is Classes - a template/blueprint for Objects

// Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hello ${name}, your age is ${age}`);
    }
}
// when we create a class this creates a prototype of Person Class

console.log(Person);
console.log(Person.prototype);

const p1 = new Person("Aman", 30);
console.log(p1);
console.log(p1.name);

const p2 = new Person("Ajay", 28);
console.log(p2);
console.log(p2.name);

const p3 = new Person("Amit", 32);
console.log(p3);
console.log(p3.name);
// In this the function is not displayed in output


class Customer extends Person {
    constructor(name, age, accountType, balance) {
        super(name, age);
        this.accountType = accountType;
        this.balance = balance;
    }

    checkBalance() {
        return this.balance;
    }
}

const c1 = new Customer("Aryan", 26, "Savings", 3000);
console.log(c1);
console.log(`Name: `, c1.name);
console.log(`Balance: `, c1.checkBalance());


// Object.create()

const myObj = {
    name: "Arun",
    age: 20
}

const newObj = Object.create(myObj);
console.log(newObj);    // {}
console.log(newObj.name);    // Arun
newObj.city = "Pune";
console.log(newObj);    // { city: 'Pune' }
console.log(newObj.city);    // { city: 'Pune' }


// // Shared methods
// const userFunctions = {
//     sayHi: function () { console.log("Hi, I'm " + this.name); }
// };

// // Create a new user, but tell it to use userFunctions as its fallback/prototype
// let user1 = Object.create(userFunctions);
// user1.name = "Alice";
// user1.score = 100;

// let user2 = Object.create(userFunctions);
// user2.name = "Bob";
// user2.score = 50;

// user1.sayHi(); // "Hi, I'm Alice"


// ### The Constructor Function

// Any function in JavaScript can become a "constructor function" if you call it with the `new` keyword. By convention, we capitalize their names to signal that they are meant to be used this way.

// function User(name, score) {
//     this.name = name;
//     this.score = score;
// }

// // Now, we need to put the shared methods somewhere.
// // Where do we put them?
// // Every function in JavaScript automatically gets a special public property called 'prototype'.
// // This is NOT the hidden [[Prototype]]. This is a plain object.

// User.prototype.sayHi = function () {
//     console.log("Hi, I'm " + this.name);
// };

// User.prototype.increaseScore = function () {
//     this.score++;
// };

// Now, we use the 'new' keyword
// const user1 = new User("Alice", 100);
// const user2 = new User("Bob", 50);

// user1.sayHi(); // "Hi, I'm Alice"
// user2.increaseScore();
// console.log(user2.score); // 51

class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    // Methods defined here are automatically put on the prototype!
    sayHi() {
        console.log("Hi, I'm " + this.name);
    }

    increaseScore() {
        this.score++;
    }
}

const user1 = new User("Alice", 100);
const user2 = new User("Bob", 50);

user1.sayHi(); // "Hi, I'm Alice"
console.log(user2.score); // 50
user2.increaseScore();
console.log(user2.score); // 51
