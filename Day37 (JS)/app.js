// 'use strict'

// console.log(window);    // ReferenceError: window is not defined
// console.log(global);    //Only for node.js environment
// console.log(globalThis);    // points to global object of its environment

// 1)
// function createMistake() {
//     // without using 'use strict'; it doesn't give error
//     // mistake = "I am without let, const, var";
//     mistake = 'I am a global variable';
//     console.log(mistake);
// }

// createMistake();
// console.log(`Global var `, mistake);
// console.log(`Global var `, window.mistake); // declared in global

// function avoidMistake() {
//     avoid = "It will be an Error";
// }

// avoidMistake()
// console.log(avoid)
// console.log(window.avoid);

// var a = 12;
// b = 13; // In non-strict it doesn't give error
// console.log(a, b);  // ReferenceError: b is not defined

// 2)
function logThis() {
    console.log(this);  // show window Object without 'use strict' and gives undefined when using in strict mode
}
// logThis();

// 3)
// function dupParameters(param1, param1) {
//     console.log(param1);    // In non-strict it prints all the arguments and in strict mode it gives syntax error of 'SyntaxError: Duplicate parameter name not allowed in this context'
// }
// console.log(10, 20);


// function greet(name, name) {
//     console.log(name, name);
// }
// greet("Amit", "Rahul");     // Rahul Rahul

// function greet(name1, name2) {
//     console.log(name1, name2)
// }
// greet("Amit", "Rahul");     // Amit Rahul


// 4) eval() scope
eval('var a = 10;');
// console.log(a); // In non-strict it logs 10 and in strict it gives error 'ReferenceError: a is not defined'


// let myVar = 100;
// console.log(myVar);
// delete myVar;  //No error in non-strict mode, error in strict mode 'SyntaxError: Delete of an unqualified identifier in strict mode.'

//  'delete' cannot be called on an identifier in strict mode.


// console.log(010);   // 8 in non-strict mode
// console.log(010);   // in strict mode, 'SyntaxError: Octal literals are not allowed in strict mode'


// This Keyword

// 'use strict'

// console.log(this);  // In non-strict mode it points to the window object, In strict mode it points to the global object

// const user1 = {
//     name: "Amit",
//     age: 30,
//     greet: function () {
//         console.log(`this `, this);
//         console.log(`Hello, ${this.name}`);
//         // console.log(`Hello, ${User.name}`);     // this is not reusable so this syntax is not used for multiple objects
//     }
// }

// user1.greet();

// const user2 = {
//     name: "Aman"
// };
// user2.greet = user1.greet;

// user2.greet();
// Problem: now if i have 100sof Objects and each have this greet function exactly same as first then it will require too much memory and violates the DRY Principle


// Big Magic of this in function
// 'use strict';

// function hello() {
//     console.log(this);  // when enabled strict mode it gives undefined in both browsers and node.js
// }
// hello();

// when we invoke a function then it looks at the left side that who has invoked the function
// So earlier when we didn't had 'use strict' then when a simple function was called then it taught that global object has called and so it gets to global object


const user1 = {
    name: "Ajay",
    age: 20
}

const user2 = {
    name: "Vijay",
    age: 22
}

function greet() {
    // console.log(this);
    console.log(`Hi, ${this.name}`);
}

function incrementAge(newAge) {
    this.age += newAge;
    console.log(this.age)
}

function changeName(newName) {
    this.name = newName;
    console.log(this.name);
}

// function_name.call(Object_name/ this will point to);
// greet.call(user1);
// greet.call(user2);

// incrementAge.call(user1, 12);
// changeName.call(user2, "Arjun");


// Another Method of doing this
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    };

    incAge(age) {
        this.age += age;
        console.log(`Your new Age ${this.age}`)
    };

    changeName(name) {
        this.name = name;
        console.log(`Your new name ${this.name}`);
    };
}

// const u1 = new User("Amit", 24)
// console.log(u1);
// u1.greet();
// const u2 = new User("Anvik", 26)
// u2.greet();
// const u3 = new User("Anirban", 27)
// u3.greet();
// u3.changeName("Aman");  // this only replaces the name with the help of function
// console.log(u3);
// u3.name = "Abhijeet";   // this changes the name of the Object
// console.log(u3);


const Obj = { name: "Abhay" };
function greeting(msg, age) {
    console.log(`${msg}!, ${this.name} , ${age}`);
}

// greeting.call(Obj, "Hey");
// greeting.call(Obj, "Hey", 20);
// greeting.call(Obj, "Hello", 23);


// greeting.apply(Obj, ["Hey", 20]);    // similar to call but has [argsArray] for arguments
// greeting.apply(Obj, ["Hello", 23]);

const sayHi = greeting.bind(Obj, "Hii", 22);    // similar to call but returns a new Object which can be called later like a function
// sayHi();


// Class Constructor

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// here this is pointing to -> {} earlier
// now this.name => {name: name_val} and this.age => {age: age_val}

// const p1 = new Person("Amit", 24);
// console.log(p1);


// Arrow Function: this doesn't exists for arrow function but this is not true because it finds its lexical environment scope


// console.log(`global this `, this);  // {}

// const arrFunc = () => {
//     console.log(this);  // so it finds this outside in the outer scope and outside is the global this which is {}

//     function inside() {
//         console.log(this);
//         function inner() {
//             console.log(this);
//         }
//         inner();
//     }
//     inside();    // in non-strict mode the node.js global obj is displayed and in strict mode it is undefined
// }

function simpleFunc() {
    console.log(this);
}

// arrFunc();      // {}
// simpleFunc();   // undefined


// const stopWatch = {
//     second: 0,
// start: function() {
//     console.log(this);  // stopWatch Object
//     setInterval(function() {    // normal function
//         console.log(this);  // global this for Timeout
//         this.second++;
//         console.log(this.second);    // NaN
//     }, 1000);
// }

//     start: function () {
//         console.log(this);  // stopWatch Object
//         const that = this;
//         setInterval(function () {
//             // console.log(this);  // timeout global scope
//             that.second++;
//             console.log(that.second);
//         }, 1000);
//     }
// }


// const stopWatch = {
//     second: 0,
//     start() {
//         console.log(this);  // stopWatch Object
//         setInterval(() => {  // this of arrow doesn't hav its own this but points to the outer scope to find this
//             this.second++;
//             console.log(this.second);
//         }, 1000);
//         console.log(`this from start `, this);
//     }
// }

// stopWatch.start();

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function() {   // normal function points`s to the current Object in which its invoked
//     console.log(this);   // points to the current button object
// });

// btn.addEventListener("click", () => {   // arrow function looks outside for this, because of its lexical environment scope
//     console.log(this); // window object 
// });


// Ways to call a function
// 1) The Method Call Syntax - Object.function();

const person = {
    name: "Aman",
    age: 30,
    speak() {
        console.log(`My name is ${this.name}`);
    }
}
person.speak();

// 2) The simple call syntax -  myfunction()

function whoamI() {
    console.log(this);
}
// whoamI();

// 3) Explicit call the bossy way -  function_name.call(Object_name) / apply / bind

function speak() {
    console.log(`Hii, My name is ${this.name}`);
}

const person1 = { name: "Aman" };
const person2 = { name: "Abhinav" };

speak.call(person1);
speak.call(person2);

// 4) Constructor call - new Object_name(arguments)

class Person {
    constructor(name) {
        this.name = name;
    }
};

const p1 = new Person("Amit");
console.log(p1);


// Arrow Function

const user = {
    name: "Alice",
    hobbies: ['reading', 'coding'],
    printHobbies: function () {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
}
// user.printHobbies();

function stopWatch() {
    this.seconds = 0;
    // this.start = (function() {
    //     setInterval(function() {
    //         this.seconds++;
    //         console.log(this.seconds);
    //     }, 1000);
    // })
    this.start = (function () {
        setInterval(() => {     // correct version
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    })
}

const mywatch = new stopWatch();
mywatch.start();

// The Old, Painful Way
// function Stopwatch() {
//   this.seconds = 0;

//   this.start = function() {
//     // We want to increment `this.seconds` every second.
//     setInterval(function() {
//       // Uh oh. We have a problem here.
//       // What is `this` inside THIS function?
//       console.log(this.seconds);
//       this.seconds++;
//     }, 1000);
//   };
// }

// const myWatch = new Stopwatch();
// myWatch.start();


function stopWatch() {
    this.seconds = 0;
    const that = this;
    this.start = () => {
        setInterval(() => {
            that.seconds++;
            console.log(that.seconds);
        }, 1000);
    }
}

stopWatch();