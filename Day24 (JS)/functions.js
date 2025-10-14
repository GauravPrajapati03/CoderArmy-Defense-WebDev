// Functions - a block/set of code which performs some task
// used to avoid repeated/reusable code
// Function types- Normal, Expression, Arrow, IIFE


// 1) Normal function
// demo();     // accessible before declaration
function demo() {
    console.log(`Hello this is a function`);
}
// demo();

function addnum(num1, num2, num3 = 0, num4 = 0) {   // num=0 default value to parameter, if we dont give this argument then it will be undefined and we will get NaN
    let sum = num1 + num2 + num3;
    // console.log(num1)
    // console.log(num2)
    // console.log(num3)
    // console.log(num4)
    console.log(`Sum `, sum);
}
// addnum(3)
// addnum(3, 5)
// addnum(3, 5, 9)
// addnum(3, 4, 6, 8);


// Spread Operator - used to spread/open the values of array
// Rest operator is used to collect or catch the values in array

function sum(...nums) {
    console.log(nums);
    let ans = 0;

    for (let num of nums) {
        ans += num;
    }
    // for (let i = 0; i < nums.length; i++) {
    //     ans += nums[i];

    // }

    console.log(`Ans `, ans);
}

// sum(3);
// sum(3, 4);
// sum(3, 4, 5);
// sum(3, 4, 5, 6, 7);
// sum(3, 4, 5, 6, 7, 8);


console.log(`--------Spread & Rest--------`);

const arr1 = [10, 20, 30, 40, 50];

const [one, two, ...num] = arr1;        // ...num - catches the rest numbers
console.log(`Rest operator `, one, two, num);

const arr2 = [30, 50, 70];
const merge = [...arr1, ...arr2];

console.log(`Spread Operator `, merge);



// Function Expression - a variable which holds the function

// console.log(addNumber(9, 9));    // Not accessible before declaration
const addNumber = function (num1, num2) {
    return num1 + num2;
}
console.log(addNumber(9, 9));


// Difference between normal function and expression function is that normal function is accessible before declaration but expression function is not accessible
// Hoisting - because of hoisting it is possible


// 3) Arrow Function - a shorter & better version of function, in arrow func 'this' keyword does not behave properly

// arrowFunc();     // not accessible before initialization
const arrowFunc = () => {
    console.log(`This is from arrow function`);
}
arrowFunc();

// If we have to directly return something from the function then we don't need to put curly brackets {}
const subtract = ((a, b) => a - b);
// const subtract = (a, b) => a-b;
console.log(`subtraction `, subtract(9, 3));

// If we want to return an Object then we have to wrap it inside '()' circular brackets on single line, and also no need to write return keyword

// function objReturn() {
//     const user = {
//         name: "Gaurav",
//         age: 20
//     }
//     return user;
// };
// function objReturn() {
//     return {
//         name: "Gaurav",
//         age: 20
//     }
// };
// objReturn = () => {
//     return {
//         name: "Gaurav",
//         age: 20
//     }
// };

// When we use the { } then JS thinks that we will use return keyword but for objects also we use { } so then for returning => '({ })'
const objReturn = () => ({ name: "Gaurav", age: 20 })
console.log(objReturn());

// **Syntax Rules for Arrow Functions:**

// 1. **Implicit Return:** If the function body is just a single expression, you can remove the curly braces `{}` and the `return` keyword.

const multiplyShort = (a, b) => a * b; // The result of a * b is automatically returned.
console.log(`multiplyShort(4,3) `, multiplyShort(4, 3));
// 2. **Single Parameter:** If there is only one parameter, you can remove the parentheses `()`.

const square = x => x * x;
console.log(`square `, square(5));
// You've already seen this in action with the array sort method: `(a, b) => a - b`. This is a concise arrow function that implicitly returns the result of `a - b`.



// 4) IIFE - Immediately Invoked Function Expression - it is called immediately when the code runs, can be without function name, the function is wrapped in two ()(); one for wrapping function in it and second for executing it

(function () {
    console.log(`This is from IIFE function`);
})();

(() => {
    console.log(`This is an IIFE arrow function`);
})();


// Advanced Parameters

// 1) Default Parameter
function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}
greet();    // Hello, Guest
greet("-");     // Hello, -
greet("Alice");     // Hello, Alice


// 2) Rest Parameters(Rest parameter must be the last parameter in a function definition)    - catch multiple values passed in the arguments
// It allows a function to accept indefinite number of arguments and gather them into a true array
// Its like put rest of the ingredients in a single bag(for making any recipe)

function displayNames(...names) {
    console.log(names);
    for (const name of names) {
        console.log(name);
    }
}
displayNames("Aman", "Ajay", "Aryan", "Raj");
displayNames("Rohit", "Mohit");


// const sumAll = (...numbers) => {
//     console.log(numbers);
//     let res = 0;
//     for (const num of numbers) {
//         res += num;
//     }
//     console.log(`Sum of numbers ${numbers} - `, res);
// }

const sumAll = (num1, num2, ...restNumbers) => {
    console.log(num1, num2, ...restNumbers);    // 3 1 4 6 9 8
    console.log(num1, num2, restNumbers);       // 3 1 [ 4, 6, 9, 8 ]
}
sumAll(2, 5, 8);
sumAll(3, 1, 4, 6, 9, 8);


// Scope of Variable - This is a critical feature that prevents variables from different parts of your code from interfering with each other.
// 1) Global Scope - a variable which is declared outside the function is a global scope variable, and it is accessible everywhere
// 2) Local Scope - a variable declared inside a function is a local scope variable, only accessible in that function block/braces

let globalVar = "I am Global";
function scope() {
    let localVar = "I am Local";
    console.log(globalVar);     //✅ accessible here , (Can access global variables)
    console.log(localVar);     //✅ accessible here
}
scope()
console.log(globalVar);     //✅ accessible here
// console.log(localVar);     //❌ not accessible here, ReferenceError: localVar is not defined


console.log(`--------Spread Vs Rest--------`)
// Rest Vs Spread - same syntax but opposite purposes
// 👉 Spread => Unpack/Expand (takes one thing and breaks it a part), e.g., Opening a suitcase and spreading the clothes everywhere
// 👉 Rest => Pack/Collect (take many things and combine them into one) e.g., Gathering all scattered clothes and packing them in a suitcase

// Spread Operator - Takes an array or Object and spreads it elements out
// Array

const numbers = [1, 2, 4, 6, 7, 9];

console.log(`...numbers(separate numbers) `, ...numbers)      // 1 2 4 6 7 9 - separate numbers
console.log(`numbers(single array) `, numbers)      // [ 1, 2, 4, 6, 7, 9 ] - single array

// Combining arrays
const num2 = [10, 20, 12, 18];
const combined = [...numbers, ...num2]  // [1, 2, 4, 6, 7, 9, 10, 20, 12, 18] - single array
console.log(`Combined `, combined);
console.log(`...numbers, ...num2 `, ...numbers, ...num2)    // 1 2 4 6 7 9 10 20 12 18 - all elements of both arrays separate
console.log(`numbers, num2 `, numbers, num2)    //  [ 1, 2, 4, 6, 7, 9 ] [ 10, 20, 12, 18 ] - two separate arrays


// Copying an Array
const copyArr = [...numbers];
console.log(`copyArr `, copyArr);

// Passing Array elements in function
function add(a, b, c) {
    return a + b + c;
}
const n = [23, 345, 647]
console.log(`add(...n) `, add(...n));

// Object

const Person = {
    name: "Aman",
    age: 30
}
// Unpacking object properties
const updatePerson = { ...Person, city: "Pune" };       // { name: 'Aman', age: 30, city: 'Pune' }
console.log(`updatePerson `, updatePerson);
// overwritting Properties
const oldPerson = { ...Person, age: 22 };     // { name: 'Aman', age: 22 }
console.log(oldPerson);


// Rest Operator - collects multiple elements and collects them into an array
// In Function Parameters

// Collect all elements of arguments in array
function addNums(...nums) {
    console.log(nums);
    return nums.reduce((total, curr) => total + curr, 0)
}
console.log(`addNums(2,4,6) `, addNums(2, 4, 6, 8, 10, 12));

// mixing regular params with rest

const introduce = (greeting, ...names) => {
    console.log(greeting);  // Hello
    console.log(names);     // [ 'Alice', 'Bob', 'John' ]
}

introduce("Hello", "Alice", "Bob", "John");


// Destructuring Arrays
const vowels = ['a', 'e', 'i', 'o', 'u'];
const [first, second, ...restVowels] = vowels;      // a e [ 'i', 'o', 'u' ]
console.log(first, second, restVowels);

// Destructuring Objects
const user = {
    name: "Alice",
    age: 20,
    city: "Jersey",
    country: "New York"
}

// const {name, city } = user;     // Alice Jersey
const { name, city, ...rest } = user;     // Alice Jersey { age: 20, country: 'New York' }
console.log(name, city, rest);


// Comparision
const arr = [10, 30, 24];
console.log(`...arr(Spread) `, ...arr);

// const example = (params) => {    // only a is output
//     console.log(params);
// }
const example = (...params) => {    // [ 'a', 'b', 'c', 'd', 'e' ]
    console.log(params);
}
example('a', 'b', 'c', 'd', 'e');

// Remember: 
// 1) Right side of assignment = Spread(Expanding)
const copy = [...numbers];
// 2) Left side of assignment = Rest(Collecting)
const [value1, value2, ...restValues] = numbers;
// 3) Function Call = Spread(Unpacking arguments)
myFunc(...numbers);
// 4) Function Definition = Rest(collecting parameters)
function myFunc(...array) { };


// Real World Eg of Both
// - **Spread** = `...` takes ONE thing → makes it MANY
// - **Rest** = `...` takes MANY things → makes it ONE

const logDetails = (name, age, ...hobbies) => {     // Rest collect all the hobbies from person and store in array 
    console.log(`Hello my name is ${name}, my age is ${age}`);
    console.log(`Hobbies `, hobbies);
}

// const person = logDetails("Arjun", 30, "Dancing", "Singing", "Acting", "Coding");

const person = ["Arjun", 30, "Dancing", "Singing", "Acting", "Coding"];
logDetails(...person);  // Spread all the values in logDetails



// Arrow Functions ( => ) - purpose of arrow func is to make code shorter and easier to read a better function
// Arrow function solves -> 1) the regular functions were two verbose for writing one line operations(like in array methods)
//  2) their behaviour with this keyword was a constant source of confusion and bugs
// Arrow function is a syntactically compact alternative to a regular function expression

// Syntax
function regularFunc(params) {

}

const myArrowFunc = () => {

}

// Step 1) Replace function keyword with => 'fat arrow'
// const add = (a, b) => {
//     return a + b;
// }

// Step 2) Implicit Return - If function body consists of only a single return expression, we can remove {} and return keyword. The result of the expression is returned automatically
// const add = (a, b) => a + b;

// Step 3) Parentheses for a single parameter - If function has exactly one parameter, you can remove the parentheses around it
// *** but if we have zero or more than one parameter then () parentheses are required

// Regular / Traditional function
// function square(x) {
//     return x * x;
// }

// Single parameter
const singleSquare = x => x * x;

const noParameter = () => "Hello";
const multipleParameters = (a, b, c) => a + b + c;

// Returning an Object - If we want to explicitly return an Object literal, you must wrap it in parentheses to distinguish it from function body's curly braces

const returnObj = name => { name: "Alice " };    // this is interpreted as a function body 

const correctReturnObj = name => ({ name: "Alice" });   // wrap the object in ()



// Callback Function - a function which is passed as an argument to another function
// This allows the receiving function(aka higher order function) to execute a callback function at a specific point during its operation, typically after a particular task is completed

function hello(callback) {
    console.log("Step 1 Hello");
    // console.log(callback);
    callback();
}
function world() {
    console.log(`Step 2 callback function World`);
}
// hello(world());     // It executes the callback first
hello(world);

// E.g.,


// function orderCake(home) {
//     console.log(`1) Hello I want a cake`);
//     console.log(`2) Ok it will take 20 min i will call u when cake is made`);
//     // callback();
//     home();
// }

// function home(cakePrepared) {
//     console.log(`3) I came to home`);
//     cakePrepared();
// }

// function cakePrepared(pickUpCake) {
//     console.log(`4) You cake is ready come and take it`);
//     pickUpCake()
// }

// function pickUpCake() {
//     console.log(`4) I received the order`);
//     console.log(`5) I came back to home with cake`);
// }

// orderCake(home);
// home(cakePrepared);


function greeting(name, call) {
    console.log(`Hello ${name}`);
    call();
}
greeting("alice", () => console.log(`How are you?`));
// Hello alice    How are you?

function orderCake(pickUpCake) {
    console.log(`Ordering a cake...`);

    setTimeout(() => {
        console.log(`Cake Ready`);
        pickUpCake();

    }, 2000);
}

// function pickUpCake() {
//     console.log(`Order Received`);
// }

// orderCake(pickUpCake);


// with promises
function orderCake() {
    console.log(`Ordering Cake....`);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Cake is ready`);
            resolve();
        }, 2000);
    })
    return promise;
}

// orderCake().then(() => console.log("I am coming to pick the cake")).then(() => setTimeout(() => {
//     console.log(`Order Received`);
// }, 2000));


// Callback function - function ke andar function - it is the heart of JS and C++ doesn't support this
// Why we use callback function - 1) Because it makes the code flexible if we do not hardcode the functions in between


function greetSomeOne() {
    console.log(`Hello Ji kaise ho`);
}

// Suppose we want to use one more callback function
function dancing() {
    console.log(`I am dancing`);
}

function meetSomeOne(callbackFunc) {
    console.log(`I am going to meet Someone`);
    // greetSomeOne(); // here i have hardcoded the function so for another function i have to change this
    // dance()

    callbackFunc();
    console.log(`I have finished meeting`);
}

// Now this is flexible and we can pass the functions accordingly
meetSomeOne(greetSomeOne);
meetSomeOne(dancing);


// Real world example
console.log("----------------------------")

function zomatoOrderPlaced() {
    console.log(`Zomato order is Placed`)
}

// Now if zomato and blinkit merge and they have to use the same payment gateway so we can also pass the callback of which function to execute
function payment(amount, placeOrder) {
    console.log(`${amount} amount payment initialized`)
    console.log(`Payment received`);

    placeOrder();

    console.log(`Order delivered Successfully`);

    // Other functions - Give taxes, give money to company, give money to rider, etc. 
}

function blinkitOrderPlaced() {
    console.log(`Blinkit Order Placed`);
}
// Callback with same payment method
payment(300, zomatoOrderPlaced);    // callback to zomato
console.log();
payment(300, blinkitOrderPlaced);   // callback to blinkit