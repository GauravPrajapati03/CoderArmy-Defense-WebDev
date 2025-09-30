// Arithmetic Operators - +, -, *, / , %, **
console.log(`---------Arithmetic Operators - ( +, -, *, / , %, ** ) ----------`);

console.log("Addition ", 2 + 8)
console.log("Subtract ", 2 - 8)
console.log("Multiplication ", 2 * 8)
console.log("Division ", 8 / 2)
console.log("Modulus ", 8 % 3)  // remainder
console.log("Exponential(5^3) ", 5 ** 3) // 5^3





// Assignment Operators
console.log(`---------Assignment Operators - ( = , +=, -=, *= , /=, */ )----------`);

let a = 10;
let b = 15;
// a += b        // a = a + b;
// a -= b;
// a *= b;
// a /= b;
b %= a;

console.log(a);
console.log(b);



// Comaparison Operators
console.log(`---------Comparision Operators - ( <, > , <=, >=, ==, !=, === )----------`);
let m = 10;
let n = 5;
console.log(`Less than `, m < n);
console.log(`Greater than `, m > n);
console.log(`Less than equal to `, m <= n);
console.log(`Greater than equal to `, m >= n);
console.log(`Equal to `, m == n);
console.log(`Not Equal to `, m != n);


console.log(`10 == "10" `, 10 == "10");
console.log(`10 === "10" `, 10 === "10");


// ** when comparing a string === number then JS converts the string to number if its possible to convert


// Type Conversion
let y = "10";
let z = Number(y);
// let y = "10a";       // NaN
// let z = Number(y);
// let z = Boolean(y);
// let y = 10;
// let z = String(y);
console.log(typeof z, z);

console.log(Number(true))       // 1
console.log(Number(false))      // 0
console.log(Number(null))       // 0
console.log(Number(undefined))  // NaN
console.log(Number("10a"))  // NaN
console.log(Number(10))  // 10
console.log(Number(""))  // 0
console.log(Number([]))  // 0
console.log(Number({}))  // NaN
console.log(Number(function() {}))  // NaN

console.log(String(true))   // true
console.log(String(false))  // false
console.log(String(null))   // null
console.log(String(undefined))  // undefined
console.log(String("10a"))  // 10a
console.log(String(10))  // 10
console.log(String(""))  // blank
console.log(String([]))  // blank
console.log(String({}))  // [object object]
console.log(String(function () { }))  // function() {}


console.log(Boolean(true))  // true
console.log(Boolean(false)) // false
console.log(Boolean(null))  // false
console.log(Boolean(undefined))   // false
console.log(Boolean("10a"))  // true
console.log(Boolean(10))  // true
console.log(Boolean(""))  // false
console.log(Boolean([]))  // true
console.log(Boolean({}))  // true
console.log(Boolean(function () { }))  // true




// Logical Operators
console.log(`---------Logical Operators - ( &&, ||, ! ) ----------`);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//  *** && - If first value is false, then it will return first value itself and if first value is true then it will output second value
//  *** || - If first value is true, then it will return first value itself and if first value is false then it will output second value

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


let p = "Rohit";
let q = "Mohit"
let r = p && q;
let s = p || q;
console.log(r)
console.log(s)

console.log("" && "hello");     // ""
console.log(0 && 20);  // 0


console.log(4 == 5);
console.log(4 != 5);


// Bitwise Operators
console.log(`---------Bitwise Operators - ( &, |, ! ) ----------`);

console.log(2 & 3);     // 2-> 010 & 3 -> 011 - 010-> 2
console.log(2 & 5);     
console.log(2 & 7);     // 7 -> 111  & 2 -> 010 ==> 010 -> 2


console.log(2 | 3);     // 2-> 010 | 3 -> 011 - 011-> 3
console.log(2 | 5);     // 010 | 101 -> 111 -> 7
console.log(2 | 7);     // 7 -> 111  | 2 -> 010 ==> 111 -> 7



// Unary Operators
console.log(`---------unary Operators - ( ++, --, +, - ) ----------`);
// ++i -> pre increment , --i -> pre decrement      => first inc/dec then use value
// i++ -> post increment , i-- -> post decrement    => first use the value and then inc/dec

let i = 1;
console.log(`--post--`)
console.log(`First `,i++);
console.log(`Second `,i++);
console.log(`third `,i++);

let j = 1;
console.log(`--pre--`)
console.log(`First `,++j);
console.log(`Second `,++j);
console.log(`third `,++j);

console.log("10");      // string
console.log(+"10");     // number


// Template Literals
// let name = "Gaurav";
// let age = 22;
// console.log(`My name is ${name} and my age is ${age}`);


// Ternary Operators
let umar = 20;
let result = umar > 18 ? "You can vote" : "You can't vote";
console.log(result);


// Nullish Coalescing
// The nullish coalescing operator (??) in JavaScript is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
//  This behavior makes it particularly useful for providing default values while preserving valid falsy values like 0, "", or false.

// let name = true;
// let user = name || "Guest";    // return guest for all falsy values

// let name = null;
// let user = name ?? "Guest";     // return Guest only if name is null or undefined

// console.log(user);

// Unlike the logical OR operator (||), which returns the right-hand operand for any falsy value (including 0, "", NaN, and false), the nullish coalescing operator only returns the right-hand operand when the left-hand operand is specifically null or undefined.

const count = 0;
const qty = count ?? 42; // This will result in qty being 0, not 42, because 0 is not null or undefined.
console.log(qty);




// Destructuring

const person = {
    name: "Aryan",
    grade: "A+",
}

const { name, grade } = person;
console.log(name);
console.log(grade);
