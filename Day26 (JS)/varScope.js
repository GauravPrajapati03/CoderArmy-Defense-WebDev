// Scope - visibility and accessibilty of a variable.

// Global Scope : Access anywhere inside the file
var a = 10;
let b = 20;
const c = 30;


// function Scope : Access only inside function
// var, let, const are all function scoped
function test() {
    var d = 40;
    let e = 50;
    const f = 60;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
test();

// block Scope : Access only inside the curly brackets scope
// let and const are also block scoped
if (true) {
    var g = 70;
    let h = 80;
    const i = 90;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(g);
    console.log(h);
    console.log(i);
}

// var - does not respect block scope only function scope
function varTest() {
    if (true) {
        var x = 100;
    }
    console.log(x);         // 100
}
varTest();
function letTest() {
    if (true) {
        let y = 200;
    }
    // console.log(y);     // ReferenceError: y is not defined
}
letTest();


// Lexical Scope : scope is determined by where you write the code, not where you call it

let globalVar = "global";   // third

function myFunc() {
    let globalVar = 'inside function';  // second

    if (true) {
        let globalVar = 'inside if';    // first
        console.log(globalVar);     //  it first checks in its scope then one level outside and and one more level
    }
}
myFunc();


// let name = "Gaurav";
// function outer() {
//     let name = "outer";
//     function inner() {
//         let name = 'inner';
//         console.log(name);
//     }
//     inner();
//     console.log(name);
// }
// console.log(name);
// outer();

// **But we cannot go down and check from outer to inner**

/*
**Why "Inner"?** JavaScript looks for variables in this order:

1. **Current scope** (inner function) → Found name = "Inner" ✓
2. If not found, check **outer scope** (outer function)
3. If not found, check **global scope**
4. If still not found → ReferenceError

This is called the **Scope Chain**.
*/

// const level1 = "level1";

// function outer() {
//     const level2 = "level2";
//     function middle() {
//         const level3 = "level3";
//         function inner() {
//             const level4 = "level4";

//             console.log(level4);
//             console.log(level3);
//             console.log(level2);
//             console.log(level1);
//         }
//         inner();
//     }
//     middle();
// }

// outer();

function outer() {
    function inner() {
        const secret = "Hidden";
    }

    inner();
    // console.log(secret);  // ❌ ReferenceError - can't look INTO inner function
}
outer();
