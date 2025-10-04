// Strings and its properties

console.log(`Strings are primitive datatype in JS, used to store sequence of characters - letter, numbers,symbols, punctuation.
Its primitive, immutable, indexed, object-like primitive - it has methods & properties we can use like .length JS temporarily wraps
it in a string object when you try to access these 
    `)

//Creating strings
let doublequote = "Hello"; console.log(doublequote);
let singlequote = 'Hii'; console.log(singlequote);
let backtick = `Hello Hii 
Everyone
This is a multiline
string`; console.log(backtick);


// Core properties
let str = `Hello this ia a string of 39 characters`
console.log(str.length);        // 39

let empty = "";
console.log(`empty `, empty.length);

// Zero based indexing
let index = `Hello Coder Army`;

console.log(index[2]);
console.log(index[4]);
console.log(index[6]);

console.log(index[index.length - 1])  // get last index character

// golden rule : strings are immutable
let myString = `This is my string`;

let uppercase = myString.toUpperCase(); console.log(`uppercase`, uppercase);
let lowercase = myString.toLowerCase(); console.log(`lowercase`, lowercase);

let localeuppercase = myString.toLocaleUpperCase(); console.log(`localeuppercase`, localeuppercase);
let locallowercase = myString.toLocaleLowerCase(); console.log(`localelowercase`, locallowercase);

console.log(`no change in mystring`, myString);


// Substrings
console.log(`-------subStrings-------`);

let sent = `The quick brown fox jumps over the lazy fox.`;

console.log(`sent.length `, sent.length);

console.log(`indexOf("fox") `, sent.indexOf("fox"));    // retuns index of first occurence of the substring if not present then returns -1
console.log(`indexOf("hello") `, sent.indexOf("hello"));
console.log(`lastindexOf("fox") `, sent.lastIndexOf("fox"));    // retuns index of last occurence of the substring if not present then returns -1
console.log(`lastindexOf("hi") `, sent.lastIndexOf("hi"));
console.log(`includes("lazy") `, sent.includes("lazy"));    // returns boolean value true if present and false if not present
console.log(`includes("cat") `, sent.includes("cat"));

//  Extract substring

// slice(start, end) - zero based and also negative index
console.log(`sent.slice(4, 9) `, sent.slice(4, 9)); // extracts the substring and returns a new String
console.log(`sent.slice(5) `, sent.slice(5)); // from 5 to end of string
console.log(`sent.slice(-10) `, sent.slice(-10)); // from -10 to -1


// substring(start, end) - zero based but no negative index
console.log(`sent.substring(0, 4) `, sent.substring(0, 4));
console.log(`sent.substring(10) `, sent.substring(10));


// replacing substrings - replace(searchvalue, newValue) - replaces first occurrence, replaceAll(searchvalue, newValue) - replaces all the occurrence,  splice(start, end, replacement)
let mystring = `Hello there how are you, how are we`;

let newstring = mystring.replace("how are you", "hi everyone");
console.log(`newstring `, newstring);
console.log(`mystring `, mystring);

let allstring = mystring.replaceAll("how", "hi");
console.log(`allstring `, allstring);
console.log(`mystring `, mystring);



let concated = mystring.concat(newstring);
console.log(`concat `, concated);


// cleaning whitespaces ->  trim  - trims the leading spaces - trimStart(), trimEnd()
let name = "   Ajay Negi   ";
console.log(`Before trim`, name);
console.log(`After trim`, name.trim());


// Splitting String into an array - split(separator) - returns a new array after splitting does not change original string
let data = "Arjun Rohit Mohit Rahul";
let newData = "Hello, how, aaaaaare , you";

let splitted = data.split(" ");
console.log(splitted);
console.log(data);

let comma = newData.split(",");
console.log(comma);
console.log(newData);

// concatenation
let str1 = "hello";
let str2 = "world";
console.log(`str1 + str2`, str1 + str2);

console.log(10 + "hello" + "21" + 34);
console.log(23 + 54 + "hello");