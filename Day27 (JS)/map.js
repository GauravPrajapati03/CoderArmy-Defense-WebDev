// Map - data structure to store data in key-value pairs also stores unique values and not duplicates
// In map we can store any type of keys and values

// This is the most critical difference. In a standard object {}, keys are automatically converted to strings. A Map preserves the key's type, allowing you to use objects, functions, or any other data type as a key.

const myMap = new Map([
    ["abc", 1],     //   'abc' => 1,
    ['z', 26],
    ['Pi', 3.14],
    [[12, 33], false],
    [{ name: "Aman", age: 20 }, true]
])

console.log(myMap);
const myMapSet = new Set(myMap);
console.log(myMapSet);

myMap.set("hello", "world");
console.log(`myMap.set("hello", "world") `, myMap);
console.log(`size of map`, myMap.size);
console.log(`.has("abc")`, myMap.has("abc"));
console.log(`.get("Pi")`, myMap.get("Pi"));     // 3.14     - gets the value of the key

for (let entries of myMap) {
    console.log(entries);
}
console.log(`only keys----`)
for (let [keys] of myMap) {
    console.log(keys);
}
console.log(`destructure key and value----`)
for (let [key, value] of myMap) {
    console.log(key, value);
}


const m1 = new Map([
    ['mno', 123],
    ['mno', 123],
    ['mno', 123],
])

console.log(m1);
console.log(m1.size);


// Problem with normal Objects
console.log(`-------Normal Obj------`)
let normalObj = {
    id: 1,
    id: 2,
    id: 3       // only the latest one is taken
}
console.log(normalObj);     // { id: 3 }

const myObject = {};

let keyObject1 = { id: 1 };
let keyObject2 = { id: 2 };

// Both keyObject1 and keyObject2 get converted to the SAME string: "[object Object]"
myObject[keyObject1] = "Value of Key 1";
myObject[keyObject2] = "Value of Key 2";


// Second assignment overwrote the first
console.log(myObject);      // { '[object Object]': 'Value of Key 2' }



// CRUD
const metadata = new Map();
let user1 = { name: "Alice" };
let user2 = { name: "Bob" };
let user3 = { name: "Charlie" };

// .set(key, value): Adds or updates a key-value pair. Returns the Map, so you can chain it.
metadata.set(user1, { lastLogin: "27-10-2025" });
metadata.set(user2, { lastLogin: "28-10-2025" });
metadata.set(user3, { lastLogin: "29-10-2025" });

console.log(`metadata.size => `, metadata.size);

// .get(key): Retrieves the value for a given key. Returns undefined if the key doesn't exist.

// .has(key): Checks if a key exists. Returns true or false.

console.log(metadata);
console.log(`metadata.get(user1) `, metadata.get(user1));   // { lastLogin: '27-10-2025' }
console.log(metadata.get(user2));   // { lastLogin: '28-10-2025' }


console.log(`metadata.has(user2) `, metadata.has(user2));   // true
// console.log(`metadata.has(user3) `, metadata.has(user3));   // ReferenceError: user3 is not defined


// .delete(key): Removes a key-value pair.
metadata.delete(user2);
console.log(`metadata.delete(user2) `, metadata);

// .clear(): Removes all key-value pairs.
metadata.clear()
console.log(`metadata.clear() `, metadata);

// iterating over map
const user = new Map([
    ["name", "Arjun"],
    ["age", 20],
    ["city", "Pune"]
])

console.log(user);

for (let val of user) {
    console.log(val);
}

for (let [key, value] of user) {
    console.log(key, " ", value);
}

// You can also use .keys(), .values(), and .entries() to get iterators, or .forEach().

let keys = user.keys();
console.log(`Keys `, keys)

let values = user.values();
console.log(`Values `, values)

let entries = user.entries();
console.log(`Entries `, entries);

// Using forEach() gets the values first and then keys
user.forEach((values, key, wholeMap) => {
    console.log(values, " ", key, wholeMap);
});


// Real World Use of Map

// 1) Storing MetaData for Objects

// const elemData = new Map();
// const button1 = document.querySelector("#btn1");        // not connected to html hence => ReferenceError: document is not defined

// // // Associate some metadata with this specific button element
// elemData.set(button1, {clicks: 0});
// console.log(elemData);


// 2) High Perfomance Caching: If you have a function that performs a complex calculation, you can use a Map to cache the results. The arguments to the function can be the key, and the result can be the value.

// 3) When u need a dictionary with non-string keys: Any time your keys are not simple strings, a Map is the correct and only choice.

