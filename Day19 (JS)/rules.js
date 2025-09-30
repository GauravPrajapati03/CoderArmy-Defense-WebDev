// Rule 1: null is loosely equal to undefined

// console.log(null == undefined)      // true
// console.log(null === undefined)     // false
// console.log(null == 0)      // false
// console.log(null == "")     // false
// console.log(null == true)   // false
// console.log(null == false)  // false
// console.log(null == [])     // false
// console.log(null == {})     // false
// console.log(null == function () { })    // false



// Rule 2: If u have >, < , <=, >= (null converts to number)
// console.log(null > 0)   // false
// console.log(null < 0)   // false
// console.log(null >= 0)  // true
// console.log(null <= 0)  // true
// console.log(null > "")  // false
// console.log(null < "")  // false
// console.log(null < undefined)  // false
// console.log(null > undefined)  // false


console.log("Rohit" > "Mohit");    // true      // R=82 > M=77
console.log("Rohit" < "Mohit");    // false
console.log("Rohit" == "Mohit");    // false
console.log("Rohit" != "Mohit");    // true