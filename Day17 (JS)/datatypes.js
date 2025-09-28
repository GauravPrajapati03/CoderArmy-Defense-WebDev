// In JS - datatype of two types
// 1) Primitive(in built data types) - the value is immutable(cannot be changed )

// 2) Non -Primitive - Values are mutable


console.log(`Primitive - number, string, boolean, undefined, null, bigint, Symbol`);

// number- represents both num and float values - memory ( 2^53-1  -> -2^53 ) = 8 bytes -> 64 bits
let n = 10; console.log(n, typeof n);
let f = 2.3434; console.log(f, typeof f);

// Special numeric values
let intVal = 100; console.log(`intVal ${intVal}`);
let floatVal = 3.14; console.log(`floatVal ${floatVal}`);
let notANum = NaN; console.log(`notANum ${notANum}`);    // result of an invalid math operation like 0/0;
let infi = Infinity; console.log(`infi ${infi}`);


// string - represent textual data, sequence of characters
let s = "This is a string"; console.log(s, typeof s);
let c = 'a'; console.log(c, typeof c);

let name = "Gaurav"
let template = `Hello! ${name}`;
console.log(template);

// boolean - logical entity with true/false value
let b = true; console.log(b, typeof b)
let bfal = false; console.log(bfal, typeof bfal);

// undefined - unintentional absence of value . A value that has been declared but not assigned a value is automatically undefined
let something; console.log(something, typeof something);

// null - represents the intentional absence of an object value -> explicitly assignment of 'no value' or 'nothing',  typeof null is 'object' a bug which is not fixed till now
let value = null; console.log(value, typeof value);

// bigint - whole number larger than maximum safe integer value that the number type can represent
let num = 124567865343456n;     // it has a 'n' in the last which makes it bigint
console.log(num, typeof num);

// Symbol - represents a unique and anonymous identifier. Symbols are primarily used as a unique property keys for objects to avoid naming collisions
//created using Symbol() factory function
let id1 = Symbol('id'); console.log(id1, typeof id1);
let id2 = Symbol("id"); console.log(id2, typeof id2);
console.log(id1 === id2);  // false - every symbol is unique



console.log(`--------------`);
console.log(`Non Primitive - array, objects, functions`);

// All non-primitive datatypes typeof is object only but for function it shows function


// array - collection of variable JS support different datatypes in array - typeof array is also 'object'
let arr = [10, 20, 34, "abcd", 's', 32.4];
console.log(arr, typeof arr);

// object - key: 'value' pair data
let user = {
    name: "Ajay",
    age: 30,
    address: {
        street: "123 abc",
        city: "Pune"
    }
}
console.log(user, typeof user);

// function - block / set of code written together 
// In JS functions are special types of objects

function myFunc() {
    console.log("Hello first");
}

myFunc();
console.log(myFunc);
console.log(`type of function - `, typeof myFunc);

// we can also store function in a variable
let a = function greet() {
    console.log(`Hello`);
}
a();
console.log(a, typeof a);


// Other built in Objects are - Date, RegExp, Set, Map, etc


// ### Primitives are Passed/Assigned by Value
// When you assign a primitive from one variable to another, the value is (copied).

let z = 10;
let y = z;      // value 10 is copied in 'y'
y = 12;     // this only changes y
console.log(`z= ${z}, y= ${y}`);  // z is unaeffected and y is reassigned




//### Objects are Passed/Assigned by Reference
// When you assign an object from one variable to another, the **reference (memory address)** is copied, not the object itself. Both variables point to the same object.

let obj1 = { value: 10 };
let obj2 = obj1;       // reference to the object of obj1 is copied to obj2 
//Both obj1 and obj2 point to exact same object in memory
obj2.value = 20;   // modiying value from obj2

console.log(`obj1`, obj1);  // 20 this is affected because of same object in memory
console.log(`obj2`, obj2);  // 20 we changed


console.log(`------------typeof Operator----------`)
console.log(typeof 123);    // number
console.log(typeof "123");  // string
console.log(typeof "Hello");    // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object
console.log(typeof 21346754321n);   // bigint
console.log(typeof Symbol());     // symbol

console.log(typeof [1,2,3]);    // object
console.log(typeof { value: 10 });  // object
console.log(typeof function() {});  // function but actually - object

