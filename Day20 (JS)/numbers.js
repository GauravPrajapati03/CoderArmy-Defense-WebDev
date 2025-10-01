// Numbers and its Operations
// JavaScript numbers are double-precision 64-bit floating point values.


// Standard Literals

// let a = 10;        // integer number
// let b = a.toString();
// let d = 3.3245      // floating point number
// console.log(typeof a, a);
// console.log(typeof b, b);
// console.log(typeof d, d);


let a = 234.4354752;
let b = a.toFixed(4);       // it is taken after the decimal point, if the last number is <5 then number is roundoff
let c = a.toPrecision(7);      // it is taken from starting, roundoff is also done
console.log(typeof a, a)
console.log(typeof b, b)
console.log(typeof c, c)



// Exponent Notations (e) - shorthand for writing very large numbers

let billion = 1e9;  // 1 followed by 9 zeros
console.log(billion, typeof billion);
let tiny = 5e-6;    // 5 divide by 10^6;
console.log(tiny, typeof tiny);



// Other bases - (Hex, Binary, Octal) - represent numbers in other numeral systems
let hex = 0xff; console.log(`hex `, hex, typeof hex);   // hexadecimal - (Base 16) -> 255 in decimal
let binary = 0b1010; console.log(`binary `, binary, typeof binary);    // binary - (Base 2) - 10 in decimal 
let octal = 0o123; console.log(`octal `, octal, typeof octal);   // octal - (Base 8) - 83 in decimal




// Special Numeric values - Infinity, -Infinity, NaN
console.log(1 / 0);    // Infinity - represents a value larger than the largest possible number, results on division by zero of Number.MAX_VALUE
console.log(-1 / 0);  // -Infinity - represent a value smaller then the smallest possible number
console.log(typeof Infinity) // number
console.log("first" / 2)    // NaN - represents the result of an invalid or undefined mathematical operation
// Its an error code for failed math.key Property of NaN: **It is the only value in JavaScript that is not equal to itself
console.log(Math.sqrt(-1))    // NaN
console.log(typeof NaN)     // number
console.log(`NaN == NaN -> `, NaN == NaN);
console.log(`true == false -> `, true == false);
console.log(`NaN === NaN -> `, NaN === NaN);



//*** Primitive data are checked by actual value or we 
let num1 = 20;
var num2 = "20";
console.log(num1 == num2);      // true
let num3 = num1;
console.log(num1 == num3);      // true - points to the same value
console.log(num1 === num2);     // false



let num = new Number(10);       // it creates an object number
var num2 = new Number(10);
// console.log(num == num2);
// console.log(typeof num, num);





// Important Number Properties & methods
console.log(`Max_Value `, Number.MAX_VALUE);     // largest positive value that can be represented
console.log(`Min_Value `, Number.MIN_VALUE);     // smallest positive value closest to zero
console.log(`MAX_SAFE_INTEGER `, Number.MAX_SAFE_INTEGER);     // largest value that can be safely represented without loosing precision (2^53 - 1) -> care about integer mat
console.log(`MIN_SAFE_INTEGER `, Number.MIN_SAFE_INTEGER);     // smallest safe integer
console.log(`POSITIVE_INFINITY `, Number.POSITIVE_INFINITY);     // Infinity
console.log(`NEGETIVE_INFINITY `, Number.NEGATIVE_INFINITY);     // -Infinity
console.log(`Epsilon `, Number.EPSILON);     // smallest interval between two representable numbers, used for float point comparisions


// Number Checking types
console.log(isNaN("hi"));       // type coersion to NaN
console.log(Number.isNaN(25));      // no type coersion

let result = 0 / 0;
console.log(isNaN(result))  // true
console.log(Number.isNaN(result))   // true

console.log(isFinite(134));     // checks if number is real orfinite number
console.log(Number.isFinite(134));      // strict version

console.log(`isInteger `, Number.isInteger(20));    // true
console.log(`isInteger `, Number.isInteger(20.234));    // false








// Formatting and converting numbers


// toString(base) - converts number to string base- 2, 16,..
let value = 220;
console.log(`decimal `, value.toString())
console.log(`hex decimal `, value.toString(16))
console.log(`binary `, value.toString(2))


// toFixed(digits) - formats a number to fixed places(after decimal) of decimal and returns a string - useful for formatting currency
let n = 131.24232
console.log(`3 digits `, n.toFixed(3));
console.log(`5 digits `, n.toFixed(5));
console.log(`7 digits `, n.toFixed(7));


// toPrecision(digits) - formats a number to a specified total number(from the whole number) of significant digits and returns a string
let precision = 3245.1532;
console.log(`3 precision `, precision.toPrecision(3)); // precision after points changes the value
console.log(`4 precision `, precision.toPrecision(4));
console.log(`6 precision `, precision.toPrecision(6));
console.log(`8 precision `, precision.toPrecision(8));


// Non-primitive data is compared by reference and not actual values
const user1 = { name: "Rohit" };
const user2 = { name: "Mohit" };
// console.log(user1 == user2);    // false because both are on different memory addresses and their values are not compared their references are compared

