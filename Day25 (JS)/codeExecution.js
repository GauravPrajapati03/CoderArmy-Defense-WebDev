// Important 
// - Computer CPU doesn't understand JS code it only understands Machine Code
// - We need to translate the JS code(human-friendly) to machine instructions and thisis done by JavaScript Engine
// - JavaScript Engine - A program that reads, translates and executes JS code. The most famous is Chromes V8 Engine, which powers Chrome and NodeJs
// Core Components of JS Engine - to manage our code, the engine sets up two primary areas in memory:
// 1) The Memory Heap - A large, unstructured pool of Memory - its like a giant warehouse where all "things"(Obj, arrays, func) from code are stored
// 2) The Call Stack - A highly organized, temporary workspace. Here the tasks are executed, it is responsible for managing the currently running

// The Execution context - this two phases process is what it creates the effect we call hoisting 
// The var are having undefined in the memory allocation and all the variables are pointing to the same undefined memory address in the heap memory


// When we run the JavaScript code - then an "execution context" is created
// Execution Context - means code runs in 2 phases - 1)Memory Allocation Phase & 2)Execution Phase
// In Memory Allocation phase the memory to all the variables and functions are assigned space in the memory and they are given undefined, first the top level variables are assigned then as it requires
// In Execution Phase the code executes line by line , the functions are stored as it is in the function memory


// when we run the code 

// Memory Allocation

// var a = undefined
// var b = undefined
// func addNumber = {func code} A complete Function Object is created on the Memory Heap. This object contains the function's metadata and, crucially, a pointer to its executable bytecode in the Code Space. In the GEC's memory, a property addNumber is created and is immediately initialized with a pointer to that object on the Heap.
// sumResult1 = undefined
// sumResult2 = undefined

// Global Memory => a, b, addNumber, sumResult1, sumResult2
// Heap => addNumber function object


// Execution Phase

// var a = 10
// var b = 20
// func addNumber = {function addNumber(num1, num2) { var sum = num1 + num2; return sum; }}
// sumResult1 = Execution Context(similarly) -> returned from its execution = 30
// sumResult2 = Execution Context -> returned sum = 9
// console.log(`sumResult1`, sumResult1);   // print 30 on console
// console.log(`sumResult2`, sumResult2);   // print 9 on console


var a = 10;
var b = 20;

function addNumber(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var sumResult1 = addNumber(a, b);
var sumResult2 = addNumber(5, 4);

console.log(`SumResult1 `, sumResult1);
console.log(`SumResult2 `, sumResult2);

// Step 0: (Compilation)
// Code is parsed, read and turned into a Data Structure called an Abstract Syntax Tree(AST)
// AST is then compiled into Bytecode -> this low-level set of instructions is loaded into a special, executable area of memory called "code Space"
// The engine will not look to the code text file it will be running this highly optimized bytecode

// Step 1: Global Execution (Creation Phase)
// 1) Creates the Global Execution Context(GEC) - It is pushed onto the Call Stack
// 2) Creates the variables and assigns them undefined for var and <uninitialized> for let and const(in TDZ - Temporal Dead Zone)
// 3) Creates the function object and stores it in the Heap

// Step 2: Execution Phase
// 1) Creates the Execution Context(EC) - It is pushed onto the Call Stack
// 2) Assigns the values to the variables
// 3) Executes the code line by line

// Step 3: Function call
// 1) A new Function Execution Context(FEC) is created for this specific call
// 2) Before going to this, the engine creates a bookmark. It takes the memory address of next bytecode instruction needed to complete the function and stores its Return Address inside the FEC
// 3) FEC is pushed onto the top of Call Stack
// 4) FEC Creation & Execution (The engine creates a local environment for this function)


// Step 4: Return
// 1) The engine looks for current FEC, finds the return Address and prepares to jump back
// 2) The FEC is popped from the Call Stack and all of its local variables are instantly destroyed. and memory is cleaned up
// 3) The engines program counter is set to the retrived return address


// Step 5: Resuming Global Execution
// 1) The engine again start the execution of code in the GEC


// Step 6: Execution Ends
// The script is now finished. The GEC is popped from the call stack, and the progam ends.


// Important Points
// 1) Code is compiled first to bytecode

// 2) Creation before executing - Memory is set aside for variables and functions before the code is executed. This is why function declarations can be called before they appear in the code.

// 3) The call stack manages the flow - The Call Stack keeps track of which function is currently running. Every function call creates a new, temporary, isolated environment (an Execution Context).

// 4) The Stack is for "who" and "Where" - It holds the execution contexts and the "return addresses" (bookmarks) to manage the flow of the program.

// 5) The Heap is for "what" - It holds the actual objects and functions, which can live on long after the function that created them has finished.



// Hoisting
// Wrong - Hoisting is when the JavaScript moves your variables and functions declarations to the top of their scope before execution
// The code does not move it is the effect if phases of execution context which causes this

// Right - Hoisting in JS is a behaviour of knowing about the variables or function's existence before executing the code.
// How it is treated that knowledge depends on the keyword
// - **`function`:** Hoisted completely (name and body).
// - **`var`:** Hoisted and initialized with `undefined`.
// - **`let`/`const`:** Hoisted, but not initialized. They are put in a Temporal Dead Zone.


// Eg - A teacher is taking attendance and then starts teaching in a class
// 1) Function Declaration - The Eager Student

console.log(`Before `); sayHello();     // Hello
function sayHello() {
    console.log(`Hello`);
}
console.log(`After `); sayHello();      // Hello


// 2) var Declaration - The absent student with reserved desk

console.log(`Before`, name);    // undefined
var name = "Gaurav";
console.log(`After `, name);    // Gaurav


// 3) let and const declaration - The late student (strict rule) - in the TDZ
// console.log(`Before `, score);  // Reference Error Cannot access 'score' before initialization
let score = 30;
console.log(`After `, score);   // 30


// myFuncVar();        // ReferenceError: Cannot access 'myFuncVar' before initialization
const myFuncVar = function () {
    console.log(`Variable function Expression`);
}
myFuncVar();  