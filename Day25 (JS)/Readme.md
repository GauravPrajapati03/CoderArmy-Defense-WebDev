# 🧠 JavaScript Execution Engine & Execution Context Explained

JavaScript is a high-level, interpreted programming language. But under the hood, it doesn’t run in its original human-readable form. Let's break down what happens when JavaScript code runs, how the JavaScript engine handles it, and the inner workings like memory, call stack, and hoisting.

---

## 📌 Core Concepts

### JavaScript Code ➡️ Machine Code
JavaScript must be translated into machine code for the computer to execute it. This is done by the **JavaScript Engine**.

### JavaScript Engine
A program that reads, compiles, and executes JavaScript code.  
The most popular one is **V8** (used by **Chrome** & **Node.js**).

---

## ⚙️ JavaScript Engine Core Components

The engine manages code using two primary memory areas:

### 1. 🧠 Memory Heap
A large, unstructured pool of memory — like a giant warehouse — where all **objects**, **arrays**, and **functions** are stored.

### 2. 🧾 Call Stack
A structured, temporary workspace that manages the currently executing code.  
Functions are **pushed** and **popped** from this stack during execution.

---

## ⚙️ Execution Context

When JavaScript runs, an **Execution Context (EC)** is created, which has **two phases**:

### 🔹 Phase 1: Memory Allocation (Creation Phase)
- Variables declared with `var` are initialized as `undefined`.
- Function declarations are stored in the Heap as objects.
- `let` and `const` are **hoisted** but **not initialized** (placed in the **Temporal Dead Zone**).

### 🔹 Phase 2: Execution Phase
- Code runs **line by line**.
- Variables are assigned values.
- Functions are executed.

---

## 🔄 Code Execution Lifecycle

Here's how the JavaScript engine processes a script:

### ✅ Step 0: Compilation
- Code is parsed into an **Abstract Syntax Tree (AST)**.
- Compiled into **Bytecode**.
- Bytecode is loaded into the **Code Space** (optimized memory space).

### ✅ Step 1: Global Execution (Creation Phase)
- **Global Execution Context (GEC)** is created and pushed to the Call Stack.
- Variables and functions are hoisted:
  - `var` ➝ `undefined`
  - `let` / `const` ➝ in **TDZ**
  - `function` ➝ Stored as objects in **Heap**

### ✅ Step 2: Global Execution (Execution Phase)
- Variables are assigned values.
- Functions are executed.

### ✅ Step 3: Function Call
- A **Function Execution Context (FEC)** is created.
- The engine sets a **Return Address** (bookmark) before entering the function.
- The FEC is pushed to the **Call Stack**.

### ✅ Step 4: Return
- The engine completes the function, retrieves the return address.
- FEC is **popped** off the Call Stack.
- Local variables inside the function are destroyed, memory is cleaned up.

### ✅ Step 5: Resume Global Execution
- The engine resumes execution from where it left off in the Global Context.

### ✅ Step 6: Execution Ends
- Once all code has executed, the GEC is **popped** from the stack, and the script ends.

---

## 🧠 Memory Structure in Code Example

```js
var a = 10;
var b = 20;

function addNumber(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var sumResult1 = addNumber(a, b);  // 30
var sumResult2 = addNumber(5, 4);  // 9

console.log("SumResult1", sumResult1);  // 30
console.log("SumResult2", sumResult2);  // 9
```

---

## ⚠️ Hoisting in JavaScript

> Hoisting is **not** about "moving" code to the top; it’s a result of how **memory is allocated** during the creation phase.

---

### ✅ Hoisting Behavior by Declaration Type

| Declaration   | Hoisted? | Initialized?         | Access Before Declaration        |
|---------------|----------|----------------------|----------------------------------|
| `function`    | ✅ Yes   | ✅ Yes               | ✅ Allowed (fully hoisted)       |
| `var`         | ✅ Yes   | ✅ Yes (`undefined`) | ✅ Allowed (but `undefined`)     |
| `let` / `const` | ✅ Yes | ❌ No (TDZ)          | ❌ ReferenceError (Temporal Dead Zone) |

---

## 🧪 Hoisting Examples

### 1️⃣ Function Declaration — *The Eager Student*

```js
console.log("Before");
sayHello();  // ✅ Works due to hoisting

function sayHello() {
    console.log("Hello");
}

console.log("After");
sayHello();  // ✅ Works again
```

### 2️⃣ `var` Declaration — *Absent Student with Reserved Desk*

```js
console.log("Before", name);  // undefined
var name = "Gaurav";
console.log("After", name);   // Gaurav
```

### 3️⃣ `let` / `const` Declaration — *The Late Student (TDZ)*

```js
// console.log("Before", score);  ❌ ReferenceError
let score = 30;
console.log("After", score);     // 30
