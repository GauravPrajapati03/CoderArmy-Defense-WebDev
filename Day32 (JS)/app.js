// console.log("first")
// let sum = 0;
// for(let i=0; i<1000000000; i++)
//     sum += i;
// console.log(sum);
// console.log("last")


// console.log("start");

// setTimeout(() => {
//     console.log("Timeout Executed")
// }, 3000);

// setTimeout(() => {
//     console.log(`New after 5 sec`);
// }, 5000)
// console.log("end");


// console.time();
// console.log('start');

// setTimeout(() => {
//     console.log("Timeout Executed");
// }, 0);

// Promise.resolve().then(() => console.log("Promise Resolved"));

// console.log('end');
// console.timeEnd();

// Fetch
// fetch('https://api.github.com/users')
// .then(res => res.json())
// .then((data) => {
//     console.log(`User Data fetched:`);
//     console.log(data)
// })

// console.log(`first`);
// console.log(`second`);
// console.log(`third`);

// blocking e.g.
function slowFunc() {
    let sum = 0;
    for(let i=0; i<1000000000; i++)
        sum += i;

    console.log(sum);
}

// console.log(`start`);
// slowFunc();     // blocks because heavy computation - this blocking freezes the web page and it becomes unresponsive
// console.log(`end`);


// Web APIs : JS Helpers

// console.log(`1. Start`)
// setTimeout(() => {
//     console.log(`2. Timeout`);
// }, 3000);

// console.log(`3. End`)

// console.log(`A`)
// setTimeout(() => {
//     console.log('B')     // send to web api
// }, 1000);

// Promise.resolve().then(() => {   // sent to microtask queue
//     console.log('C');
//     console.log('D');
// })

// console.log(`E`);


// Commmon web apis
// Timers Api

// setTimeout(() => {
//     console.log(`Timeout`);
// }, 1000);

// setInterval(() => {
//     console.log(`Interval`);
// }, 2000);


// Network Api
// fetch("https://dummyjson.com/users/1").then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Dom Apis/Events
// document.getElementById('btn').addEventListener('click', () => {
//     console.log(`Button Clicked`)
// })


// File Api`s
// fs.readFile('file.txt', (err, data) => {
//     console.log(data);
// });


// JS never waits it just calls the function prints what it gets and moves to the next line

// console.log(Math.random());
// console.log(Math.PI);
// console.log(document.getElementById('btn'));
// setTimeout(() => {
//     console.log(`Executed Timeout`);
// }, 2000);
// fetch('https://dummyjson.com/users/1').then(res => res.json())
// .then(data => console.log(data))


// Return Value Vs Callback

// const currWidth = window.innerWidth;
// console.log(currWidth);

const timerId = setTimeout(()=>{
    console.log(`Settimeout executed`)
},1000);

console.log(timerId);