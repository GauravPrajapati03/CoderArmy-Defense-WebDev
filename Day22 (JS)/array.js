// Arrays - a collection of data in JS we can store different datatypes in the array


// Creating arrays
const emptyarr = [];
console.log(`emptyarr `, emptyarr);
console.log(`length of emptyarr `, emptyarr.length);

const numbers = [12, 32, 45, 41, 65];
console.log(numbers);

// const fruits = ["apple", "mango", "banana", "guava"];
// console.log(fruits);

const vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);

const mixed = [12, 23, 41, "ajay", "sharma", true, 52, false, 'a', 'f', null, undefined];
console.log(mixed);
console.log(`mixed length `, mixed.length);

const lengths = [null, undefined];
console.log(`lengths `, lengths.length);    // length -  tells you how many items are present in it.


// accessing and changing values/elements - arrays follow zero-based indexing

const arr = [12, 34, 52, 46, 23, 13];
arr[5] = 99;
// arr[0] = '';
arr[1] = "hello";
console.log(arr);

console.log(`access last element `, arr[arr.length - 1]);

console.log(`element which does not exist arr[10] `, arr[10]); // If you try to access an index that doesn't exist, you get undefined.

// Adding and removing elements(mutating array)

const tasks = ["watch video", "post", "responsiveness video", "watch movie"];
tasks.push("write code");
console.log(tasks);

const completedTasks = tasks.pop("post");
console.log(`completedTasks `, completedTasks);
console.log(tasks);

// Add/Remove from beginning    -  (Note: unshift and shift can be slower on very large arrays because every other element needs to be shifted to a new position.)

const addque = ["person B", "person C"];
addque.unshift("person A");    // add at starting
console.log(`unshift() `, addque);


const removeque = ["person D", "person E"]
removeque.shift();    // remove from first
console.log(`shift() `, removeque);

// looping over an array(iteration)
// A. The Classic for Loop - This is the most fundamental way to iterate. You create a counter variable (i) that tracks the index.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// B. The for...of Loop (The Modern, Simpler Way) - This is the preferred method when you only care about the value of each item and not its index. It's cleaner and less error-prone.
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// Advanced manipulation

// **A. The `splice()` Method (The "Surgery" Tool)**    - makes changes in the original array
// This is a powerful **mutating** method that can add, remove, or replace elements anywhere in the array.
//**Syntax:** `array.splice(startIndex, deleteCount, item1, item2, ...)`

const months = ["January", "February", "March", "April"];
// Add "oct", "nov"
months.splice(2, 1, "October", "November");
console.log(`add oct, nov `, months);

// remove 'Nov'
months.splice(3, 1);
console.log(`remove nov `, months)

// replace jan -> dec
months.splice(0, 1, "December");
console.log(`replace Jan -> dec`, months);

// **B. The `slice()` Method (Making a Copy)**  - does not makes changes in the original array
// This method creates a **new array** by copying a portion of an existing array. It does **not** change the original.
// **Syntax:** `array.slice(startIndex, endIndex)` (end index is not included)


const animals = ["dog", "cat", "horse", "camel", "monkey"];
console.log(animals);

const middle = animals.slice(1, 4);
console.log(`middle animals`, middle);

const startidx = animals.slice(2);
console.log(`slice(2) `, startidx);  // start from the index and print till last

const copyAnimals = animals.slice();    // A common way to make a full copy of an array
console.log(`Animals copy `, copyAnimals);

console.log(`Original array no change`, animals);



// C. The Spread Operator (...) (The Modern Way to Copy/Combine)
// This is the most popular way in modern JavaScript to create copies or merge arrays. It makes the elements individual and out of array 

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

const copyArr1 = [...arr1];     // Make a copy of arr1
console.log(`Copy of Arr1`, copyArr1);

const combine = [...arr1, ...arr2];     // combine arr1 and arr2
console.log(`Combine arr1 and arr2 `, combine);

const AddinMiddle = [...arr1, 'x', 'y', ...arr2];
console.log(`AddInMiddle`, AddinMiddle);

// Converting and searching
// Convert - Array to String

const names = ["Rohit", "Mohit", "Sohan", "Mohan"];
const namesList = names.join(", ");
console.log(`Array to String `, namesList);

// Simple Searching
// indexOf(item) = returns the index of first time an item appears in the array. Returns -1 if not found
// lastIndexOf(item) = returns the index of last time an item appears in the array
// includes(item) = returns boolean values(true or false) if item present in the array. This is a simple & readable for check


const nums = [10, 20, 30, 40, 50, 30];
console.log(nums);
console.log(`.indexOf(30) `, nums.indexOf(30))      // first occurrence
console.log(`.lastIndexOf(20) `, nums.lastIndexOf(30))      // last occurrence
console.log(`.indexOf(100) `, nums.indexOf(100))      // (-1) not present

console.log(`includes(40) `, nums.includes(40))     // true
console.log(`includes(90) `, nums.includes(90))     // false


// Advanced Array methods - Sorting, Flatenning, Deleting
// .sort() - inplace, sorts on the basis of ascii table values - it is because the array can store heterogenous data so it uses this default behaviour, (Dictionary Sort) - A-Z(65-96), a-z(97-123), numbers and so on
// It sorts in lexicographical order based on UTF-16 character codes/ encoding values 

let fruits = ["Guava", "Mango", "Banana", "Grapes", "Apple"];
console.log(`Original(Before) `, fruits)
console.log("Sorted ", fruits.sort());
console.log(`Original(After) `, fruits)

// But for numbers it doesn't work as expected - because the numbers are converted to string and then compared
let values = [90, 129, 43, 156, 35];
console.log(`Original(Before) `, values)
// console.log("Sorted ", values.sort());
console.log("Ascending Sorted ", values.sort((a, b) => a - b));
console.log("Descending Sorted ", values.sort((a, b) => b + a));
console.log(`Original(After) `, values)


// Flattening the array(ES2019)

// an array can contain other arrays or nested arrays or multi-dimensional array
let multi = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10], 11, 12];
console.log(`1st level `, multi[0]);
console.log(`2nd level `, multi[3][0]);
console.log(`1st level `, multi[3][3][0]);

// Flatten - only having a single array without nesting
// .flat() - creates a new array by pulling out all the items from the sub-array. Its non-mutating , also automatically removes empty slots in sparse ways

const nestedArr = [1, 2, 3, [7, 8, 9]];
console.log(`Original nestedArray `, nestedArr)
const oneleveldeep = nestedArr.flat();
console.log(`onelevelflat `, oneleveldeep);

const deeplyNested = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(`Original deeplyNested `, deeplyNested)
const flatlevel1 = deeplyNested.flat();
console.log(`deeplyNested.flat() `, flatlevel1);
console.log(`\nOriginal deeplyNested `, deeplyNested)

const flatlevel2 = deeplyNested.flat(2);
console.log(`\ndeeplyNested.flat(2) `, flatlevel2);
console.log(`Original deeplyNested `, deeplyNested);

const flatlevel3 = deeplyNested.flat(3);
console.log(`\ndeeplyNested.flat(3) `, flatlevel3);

const infinite = deeplyNested.flat(Infinity);
console.log(`\ndeeplyNested.flat(Infinity) `, infinite);


// A sparse array is an array where some elements are missing.
const sparse = [1, , 4, , 6, [43, , 45]];    // the elements are missing it is not undefined also it is a hole means completely missing
console.log(sparse);
console.log(`length of sparse`, sparse.length);     // 6
console.log(`removes empty spaces/missing elements `, sparse.flat());

// Deleting elements from array

// 1) pop(from end) or shift(from beginning) - removes the element and updates the length
const cards = ["ace", "joker", "king", "Queen", "diamond"];
console.log(`Orginal Cards `, cards);
console.log(`Orginal Cards length `, cards.length);
cards.pop();
console.log(`Cards after pop (.pop())`, cards);
console.log(`Cards length `, cards.length);
cards.shift();
console.log(`Cards after shift(.shift())`, cards);
console.log(`Cards length `, cards.length);


// 2) Splice
const items = ['a', 'b', 'c', 'd'];
console.log(`Original items array `, items)

const deleted = items.splice(2, 1); // remove item 'c'
console.log(`deleted c `, deleted);
console.log(`Array after splice`, items);


// 3) delete operator - (avoid using it -bad way)
// It does not completely the element it keeps an empty space

const chess = ["pawn", "horse", "camel", "king", "queen"];
console.log(`Chess `, chess);
console.log(`Chess length `, chess.length);      // 5
delete chess[1];
delete chess[4];
console.log(`Chess `, chess);   // [ 'pawn', <1 empty item>, 'camel', 'king', <1 empty item> ]
console.log(`Chess length `, chess.length);      // 5


// ### Why is array not array in JavaScript
// Original Arrays - 1) Contiguous Memory  2) Homogenous data  3) Mathematical Access through formula ( Base_Address + (location * size of each data))  4) No Gaps - no sparse spaces/ gaps

// JS Arrays - 1) Like an Object  2) Heterogenous data  3) Can have holes or sparse gaps  4) Property Loopup(not maths) looks like user["name"]


const JSArray = [12, 34, 4, 54, true, false, "Rohit", 3.14];
JSArray.name = "Rahul";
console.log(JSArray);
console.log(`JSArray[3]`, JSArray[3]);
console.log(`JSArray["6"]`, JSArray["6"]);
JSArray.age = 30;
console.log(`JSArray`, JSArray);
console.log(`JSArray length`, JSArray.length);
