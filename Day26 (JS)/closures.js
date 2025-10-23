// Closures - Functions remebers their birthplace - most important in JS

// Closure - a function that remembers variables from its outer scope even after the outer function has finished execution

function outer() {
    let count = 0;
    return function increment() {
        console.log(count);
        count++;
    }
}

let counter = outer()

// counter();
// counter();
// counter();
// counter();
// console.log(counter);


// function makeCounter() {
//     return function increment() {
//         console.log(`I am increment function`);
//         // return 20;
//     }
//     // return increment;
// }


// const returnValue = makeCounter();
// // console.log(returnValue);
// returnValue();


// function makeCounter() {
//     let count = 0;
//     return increment = () => {
//         count++;
//         console.log(count);
//     }
// }

// // console.log(count);      // not accessible
// const returnVal = makeCounter();
// // console.log(returnVal);
// returnVal();
// returnVal();
// returnVal();
// returnVal();
// returnVal();


function createCounter() {
    let count = 0;  // here this function has finished execution but still the inner(increment) function remembers the value of count variable
    return function increment() {
        count++;
        return count;
    }
}
// It is observed that when the execution of the function is completed it is removed from the stack and its variables are cleared by garbage collector
// But in this case the count variable is given memory in the heap because the variable is being utilized in inner function


const retFunc = createCounter();
// console.log(retFunc());
// console.log(retFunc());
// console.log(retFunc());


// Garbage collector in JS works automatically - it uses the 'mark and sweep' approach to free the resources
// GC - runs when engine detects low memory, a certain threshold of allocated memory is crossed, during idle time
// The GC can run inrementally and concurrently means runs alongside your code, in short burst to avoid long pauses that affect performance


// 1e4 => 1 x 10^4


// Why closures exists-
//  without Closures - the functions would only access their own variables and globals
//  with Closures - functions can "carry" their own variables and envionment with them


// Use of Closures - to make the data secure from unintentional changes from developers
// Used in redux

function outer() {
    const message = "Hi Everyone";
    return function inner() {
        console.log(message);
    }
}

// const msg = outer();
// msg();


// real world example

// let balance = 500;  // this balance variable is accessible and it can be changed
// balance += 600;
// balance += "Amit";
// console.log(balance);

// let user = {
//     balance: 500,    // here it is not private it can be access by user.balance

//     // The methods can access the balance variable
//     deposit: function (amt) {
//         if (amt > 0 && typeof amt === 'number') {
//             this.balance += amt;
//             return this.balance;
//         }
//         else {
//             return "Invalid Amount";
//         }
//     },
//     withdraw: function (amt) {
//         if (amt <= this.balance) {
//             this.balance -= amt;
//             return this.balance;
//         }
//         else {
//             return "Invalid Amount";
//         }
//     },
//     getBalance: function () {
//         return `Current Balance: ${this.balance}`;
//     }
// }

// console.log(user.deposit(1000));
// console.log(user.withdraw(100));
// console.log(user.getBalance());
// console.log(balance);       // ReferenceError: balance is not defined - it is not directly accessible

// user.balance += 200;
// console.log(user.balance);      // It is still accessible and can be changed direcctly
// If the user can directly access the balance variable then why will he use the methods deposit & withdraw


// If we make the balance variable in global scope

// let balance = 600;

// let user = {
//     deposit: function(amt) {
//         if(typeof amt === 'number' && amt > 0) {
//             balance += amt;      // no need to use this.balance in global scope
//             return balance;
//         }
//     }
// }

// console.log(user.deposit(300));


// Using closure to solve this problem

function bankAccount() {
    let balance = 1000;         // now this is private variable only the below methods can access it 

    // from where it can change
    // balance += 200;

    return {
        deposit: function (amt) {
            if(amt > 0 && typeof amt === 'number') {
                balance += amt;
                return balance;
            }
            else {
                return 'Invalid Amount';
            }
        },
        withdraw: function(amt) {
            if(typeof amt === 'number' && amt <= balance && amt > 0) {
                balance -= amt;
                return balance;
            }
            else {
                return "Invalid Amount";
            }
        },
        getBalance: function() {
            return `Current balance: ${balance}`;
        }

    }
    // return user;
}

const customer = bankAccount();
console.log(customer.deposit(200));
console.log(customer.getBalance());
console.log(customer.withdraw(500));
console.log(customer.getBalance());
console.log(customer.balance);      // undefined