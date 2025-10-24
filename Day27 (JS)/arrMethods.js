//(Array Methods) => forEach, map, filter, reduce, etc - aka Higher Order Function means which has callback function

// For Each

const arr = [12, 34, 31, 13, 56, 78, 90];

arr.forEach((elem, idx, fullArr) => {
    console.log(elem, idx);
});





// Filter - filters the elements of array which satisfies the condition and returns a new Array

const array = [9, 4, 1, 6, 5, 8, 3, 2];

// console.log(array.filter((num) => num > 5));
const filtered = array.filter((num) => num > 4);
console.log(`array.filter() `, filtered);

// const myArr = [34, 42, 35, 63, 45];
// custom array filter method

// const compare = (num) => num > 10;
// console.log(compare(11));

// Custom filter method for that array only
// myArr.customFilter = function (compare) {
//     const newArr = [];
//     console.log(`this `, this);

//     for (const num of myArr) {
//         console.log(num);
//         if (compare(num)) {
//             newArr.push(num);
//         }
//     }
//     return newArr;
// }
// console.log(myArr.customFilter(n => n > 40));


// console.log();



// normal Object
const Obj = {
    name: "Ajay",
    greet: function () {
        console.log("Hello", this.name);
    }
}
Obj.greet();


console.log(`--------Custom Array Method--------`)
const myArr = [2, 35, 6, 34, 23, 52];
// custom method for all arrays
// But this is not recommended way to make our custom array methods and add in the arrays it can cause bugs in code
Array.prototype.filtering = function (callback) {
    let ans = [];
    for (let n of this) {
        // console.log(n);
        if (callback(n))
            ans.push(n);
    }
    return ans;
}
// when we add Array.prototype then it becomes method for all the arrays
console.log(myArr.filtering(n => n > 20));
console.log([10, 20, 30, 40, 50].filtering(n => n > 30));



console.log(`----------Map---------`)
// Map - to iterate over each element of array and modify it returns a new array
const sample = [2, 4, 6, 8, 9, 10, 13, 15];
const square = sample.map((n) => n * n);
console.log(square);


console.log(`------Real World Example-------`);


const products = [
    { "id": 1, "name": "Wireless Mouse", "category": "Electronics", "price": 25.99, "in_stock": true },
    { "id": 2, "name": "Bluetooth Headphones", "category": "Electronics", "price": 59.49, "in_stock": true },
    { "id": 3, "name": "Laptop Stand", "category": "Accessories", "price": 19.99, "in_stock": false },
    { "id": 4, "name": "Mechanical Keyboard", "category": "Electronics", "price": 89.99, "in_stock": true },
    { "id": 5, "name": "Smartwatch", "category": "Wearables", "price": 129.99, "in_stock": true },
    { "id": 6, "name": "Water Bottle", "category": "Home & Kitchen", "price": 12.49, "in_stock": true },
    { "id": 7, "name": "Yoga Mat", "category": "Fitness", "price": 24.99, "in_stock": false },
    { "id": 8, "name": "Gaming Chair", "category": "Furniture", "price": 199.99, "in_stock": true },
    { "id": 9, "name": "LED Desk Lamp", "category": "Home & Office", "price": 34.50, "in_stock": true },
    { "id": 10, "name": "Running Shoes", "category": "Footwear", "price": 79.99, "in_stock": true },
    { "id": 11, "name": "Wireless Charger", "category": "Electronics", "price": 22.99, "in_stock": false },
    { "id": 12, "name": "Cookware Set", "category": "Home & Kitchen", "price": 149.00, "in_stock": true },
    { "id": 13, "name": "Noise Cancelling Earbuds", "category": "Electronics", "price": 99.99, "in_stock": true },
    { "id": 14, "name": "Men’s Leather Wallet", "category": "Accessories", "price": 45.00, "in_stock": true },
    { "id": 15, "name": "Smart LED Bulb", "category": "Home Automation", "price": 14.99, "in_stock": true },
    {
        "id": 16,
        "name": "4K Monitor",
        "category": "Electronics",
        "price": 299.99,
        "in_stock": false
    },
    {
        "id": 17,
        "name": "Backpack",
        "category": "Travel",
        "price": 49.99,
        "in_stock": true
    },
    {
        "id": 18,
        "name": "Electric Toothbrush",
        "category": "Health & Personal Care",
        "price": 39.95,
        "in_stock": true
    },
    {
        "id": 19,
        "name": "Coffee Maker",
        "category": "Home & Kitchen",
        "price": 89.00,
        "in_stock": true
    },
    {
        "id": 20,
        "name": "Tablet 10-inch",
        "category": "Electronics",
        "price": 189.99,
        "in_stock": false
    }
]

const pricegreaterthan100 = products.filter((product) => product.price > 100);
const onlynameandprice = pricegreaterthan100.map((prod) => ({ name: prod.name, price: prod.price }));
const descendingsorted = onlynameandprice.sort((a, b) => b.price - a.price);
console.log(`price greater than 100`, pricegreaterthan100);
console.log(`only name and price`, onlynameandprice);
console.log(`descending sorted`, descendingsorted);



// reduce method - iterates over all the array elements and returns a single value
// Real world Use case - when we have products in cart and we want to get the total bill amount
console.log(`-----Reduce method----`);

const Arr = [1, 2, 3, 4, 5];
const sum = Arr.reduce((accu, currVal) => {
    return accu + currVal;
}, 0);
console.log(`Sum of array elements `, sum);


const totalbill = products.reduce((accu, currVal) => {
    return accu + currVal.price;
}, 0);
console.log(`total bill `, Math.floor(totalbill));

const cart = products.reduce((sum, curr) => {
    if (curr.in_stock) {
        return sum + curr.price;
    }
    else
        return sum;
}, 0);
console.log(`total cart price `, Math.floor(cart));


console.log(`========Real Use Case Examples==========`)
console.log(`\nforEach - the iterator`)
products.forEach((product) => {
    console.log(product.name);
})

// When to Use: When you need to "do something" for each item but you don't need to create a new array from the results. Examples: logging, updating a UI, saving each item to a database.


console.log(`\nmap - the transformer(Non-mutating)`);
const prodNamesArray = products.map((prod) => prod.name);
console.log(prodNamesArray);

// When to Use: When you need a new array that is a modified version of the original. This is one of the most-used array methods.

console.log(`\nFilter - the bouncer/ the Seive(Non-mutating)`);

const availableElectronics = products.filter((product) => product.category === "Electronics" && product.in_stock === true);
console.log(`availableElectronics `, availableElectronics);

// When to Use: Whenever you need to select a subset of data from an array based on one or more conditions.

console.log(`\n reduce - the accumulator/ the snowball (Non-mutating)`);

// - `accumulator`: The value that is "accumulated" or carried over from the previous iteration. It's the snowball.
// - `currentValue`: The current element being processed.
// - `initialValue`: The **starting value** for the accumulator (the small snowball you start with). This is a crucial argument.

console.log(`------------------------------`)
const totalValue = products.reduce((accu, currProd) => {
    if (currProd.in_stock === true) {
        console.log(currProd);
        return accu + currProd.price;
    }
    else {
        return accu;
    }
}, 0);
console.log(`total Value in Stock `, Math.floor(totalValue));

const totalStockPrice = products.reduce((total, currProd) => {
    console.log(`Current Total ${Math.round(total)}, Current Product ${currProd.name}, Product Price ${currProd.price}`);
    if (currProd.in_stock === true) {
        return total + currProd.price;
    }
    // If not in stock, just return the current total without adding anything.
    return total;
}, 0)

console.log(`totalStockPrice `, Math.round(totalStockPrice));

// When to Use: When you need to derive a single summary value from an array. Examples: sum, average, finding the most expensive item, grouping items into an object.


console.log(`--------Find---------`);
// .find(): Like .filter(), but it stops and returns the very first element that matches the condition. If nothing matches, it returns undefined.
const coffeemaker = products.find((prod) => prod.name === 'Coffee Maker');      // It requires the exact match
console.log(`prod.name === 'Coffee Maker' `, coffeemaker);

console.log(`--------Some---------`);
// .some(): Checks if at least one element in the array passes the test. Returns true or false. It stops as soon as it finds one.
const hasOutOfStockItems = products.some(prod => prod.in_stock === false);
console.log(`hasOutOfStockItems `, hasOutOfStockItems);

console.log(`--------Every---------`)
// .every(): Checks if all elements in the array pass the test. Returns true or false. It stops as soon as it finds one that doesn't pass.

const areAllItemsInStock = products.every((prod) => prod.in_stock === true);
console.log(`areAllItemsInStock `, areAllItemsInStock);
