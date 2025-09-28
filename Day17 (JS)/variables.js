// Variable declaration methods

// JavaScript - built in 10 days by Brandein Eich, first it was know as Mocha it was built with sun microsystems which also created Java Language after that i was named as LiveScript and now JavaScript and its extension is today know as TypeScript


console.log(`---------var--------`)
// Old method 
// 1- var ( can be reassigned, redeclared , Globally or Function Scope,  initialization optional if not then it holds 'undefined', var is hoisted it is in TDZ but its value is accessible before declaration)

// disadv - it allows to redeclare variables which can be dangerous

var num = 10;
var num = 20;
// console.log(num);

if (true) {
    var temp = "Var In block scope"
}

function myFunc() {
    var myVar = "In function scope";
    // console.log(myVar);         // accessible
}

myFunc()
// console.log(temp);      // accessible for block
// console.log(myVar);        // not accessible

// Hoisting

console.log(`Before declaration`, hoisting)
var hoisting = 20;
console.log(`After declaration`, hoisting);

for (var u = 1; u < 5; u++) {
    console.log(`u`, u);
}
console.log(`u out of scope`, u++);
console.log(`u++`, u);





console.log(`-------LET--------`)
// 2- let ( cannot be redeclared, can be reassigned , block Scoped var, initialization optional if not then it holds 'undefined', let is hoisted it is in TDZ but its value is not accessible)


let a = 10;
a = 30;
// console.log(a);

for (let i = 0; i < 5; i++) {
    console.log(i);     // i is only accessible in this scope
}


if (true) {
    let temp = "Var In block scope"
}

function myFunc() {
    let myVar = "In function scope";
    // console.log(myVar);         // accessible
}

myFunc()

let unknown;    // undefined
console.log(unknown);

// console.log(temp);      // not accessible for block
// console.log(myVar);        // not accessible

// console.log(hoist)      // In TDZ not accessible but its declaration is on the top
let hoist = 20;








console.log(`---------CONST---------`)
// 3- const ( cannot be redeclared/ reassigned, value is assigned only once when initialization, Initialization Mandatory, block scoped, const is hoisted it is in TDZ but its value is not accessible)

const name = "Gaurav";
// name = "Ajay";     // Type error: Assignment to constant variable

if (true) {
    const temp = "Var In block scope"
}
// console.log(temp);      // Reference error: temp not defined = not accessible because accessing outside block

function myFunc() {
    const myVar = "In function scope";
    // console.log(myVar);         // accessible
}

const CONFIG = {
    port: 8080
}
CONFIG.port = 5000;
console.log(CONFIG);  // config still points to port because pass by reference

myFunc();

// console.log(myVar);        // not accessible = Reference Error

// console.log(name);

console.log(`Temporal Dead Zone`);
// console.log(MY_CONST);      // ReferenceError: Cannot access 'MY_CONST' before initialization

const MY_CONST = "Strike";
