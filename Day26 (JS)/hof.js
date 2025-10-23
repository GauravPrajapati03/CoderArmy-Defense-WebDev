// HOF(Higher Order Function) - it is a function which returns a function as result / takes a function as argument
// In JS is Functions are first-class citizens - they can be treated like any other value (passed around, returned, stored in other variables)

function outer(params) {
    return function inner(num) {
        return num * params;
    }
}

// const inner = outer(10);
// console.log(inner(2));
// console.log(inner(3));
// console.log(inner(4));

const direct = outer(30)(3);
// const x = outer(30)(4);     =>   x(4);
console.log(direct);



// Type 1: Functions that take functions as arguments
// Eg  1: Array methods

const arr = [10, 20, 30, 40, 50];
const newArr = arr.map(function (el) {
    return el * 2;
})

console.log(newArr);
// .map is a higher order function, because it accepts a function (function(el) { return el * 2}) inside the map function or parameter



// Eg  2: Custom Higher order function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, function (i) {
    console.log("Iteration ", i);
})

