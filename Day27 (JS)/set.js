// SET -  a data structure which stores unique values of any type
// Arrays can store duplicate values but Set only stores uniques values of first occurrence
// converts an array into object [] => {}

const arr = [10, 20, 30, 40, 50, 20, 10, 30, 40];
console.log(`Original Array `, arr);

const mySet = new Set(arr);
console.log(`Array to Set `, mySet);
console.log(`mySet.has(18) `, mySet.has(18));   // boolean value
console.log(`length(size) of set `, mySet.size);    // 5

mySet.add(60);
console.log(`mySet.add(60) `, mySet);

mySet.delete(30);
console.log(`mySet.delete(30) `, mySet);

mySet.forEach((n) => console.log(n));

const emails = ['ajay@gmail.com', 'amit@gmail.com', 'mohit@gmail.com', 'ajay@gmail.com'];
console.log(emails);
const emailSet = new Set(emails);
emailSet.add("gaurav@gmail.com")
console.log(emailSet);
// Again in array form
// const arrayOfEmails = [...new Set(emails)];
const arrayOfEmails = [...emailSet];        // spread operator
console.log(arrayOfEmails);
console.log(`length of arrayOfEmails`, arrayOfEmails.length);    // 4

for (let email of arrayOfEmails) {
    console.log(email);
}


// CRUD
console.log(`---------------------------`);
const nums = [1, 2, 3, 4, 6, 2, 5, 1, 2, 4];
const numsSet = new Set(nums);
console.log(numsSet);

numsSet.add(7);
console.log(`numsSet.add(7) `, numsSet);

numsSet.delete(2);
console.log(`numsSet.delete(2)`, numsSet);
console.log(numsSet);

console.log(`numsSet.has(4) `, numsSet.has(4));

numsSet.clear()
console.log(`numsSet.clear() `, numsSet);


// iterate over set

// const roles = ['user', 'admin', 'manager'];
// const userRoles = new Set(roles);
const userRoles = (['user', 'admin', 'manager']);
console.log(userRoles);

for (let role of userRoles) {
    console.log(role);
}

const permissions = new Set(['read', 'write', 'execute']);
console.log(permissions);
permissions.forEach(element => {
    console.log(element);
});


console.log(`=========Use Case=========`)

// Use Case
// 1) Remove duplicates from Array
// 2) Checking for uniqueness / Existence  :   Set.has() is much faster than Array.includes() for very large datasets. If you just need to track if you've "seen" an item before, a Set is far more performant.

const visitedUsers = new Set();

function visit(id) {
    if (!visitedUsers.has(id)) {
        console.log(`Welcome New User ${id}`);
        visitedUsers.add(id);
    }
    else {
        console.log(`Welcome again User ${id}`);
    }
}

visit(101);
visit(102);
visit(101);
