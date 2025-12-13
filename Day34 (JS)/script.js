// api - https://api.github.com/users

// Promises

const url = "https://api.github.com/users";

// console.log(`Promise Start`)

// const p1 = fetch(url);
// const p2 = p1.then((res) => {
//     return res.json();
// })

// p2.then((data) => {
//     console.log(data)
// })


// promise chaining
// fetch(url)
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(`Failed to load Data`, err.message));

// catch only occurs when the respnse is rejected, means request is not reached to the server or responded by a server, conditions like (internet off, server or dns down)
// else in all the cases the .then() will be executed for fullfilled promises even if the data is not found then also the response is given by the sever is the link is incorrect
// we need to handle the failed cases in .then() block if response.ok is is true then data is found else not false

// console.log(`Promise End`)

// fetch('https://api.github.com/user')
// .then((res) => {
//     if (!res.ok) {
//         throw new Error(`No data found`);
//     }
//     return res.json();
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(`Server Error`, err.message));


// fetch(url)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error(`No data found`);
//         }
//         return res.json();
//     })
//     .then((data) => {
//         // console.log(data[0]);
//         // let parent = document.getElementById('parent')


//         // const frag = document.createDocumentFragment();

//         // for (let i = 0; i < 10; i++) {

//         //     let image = document.createElement('img');

//         //     image.style.height = "150px";
//         //     image.style.width = "150px";

//         //     image.style.margin = "0 10px 10px 0";

//         //     image.src = data[i].avatar_url;

//         //     parent.append(image);
//         // }

//         displayUser(data);
//     })
//     .catch((err) =>
//         console.log(`Internal Server Error`, err.message)
//     )

function displayUser(data) {
    let parent = document.getElementById('parent');
    for (let i = 0; i < 10; i++) {

        let image = document.createElement('img');

        image.style.height = "150px";
        image.style.width = "150px";

        image.style.margin = "0 10px 10px 0";

        image.src = data[i].avatar_url;

        parent.append(image);
    }
}


// JS Obj to JSON
// const user = {
//     name: "Gaurav",
//     age: 20,
//     profession: "software developer",
// }

// const jsonformat = JSON.stringify(user); 
// console.log(`Obj to JSON format: `, jsonformat);

// JSON to JS Obj
// const Jsondata = `{
//     "name": "Aman",
//     "age": 30,
//     "city": "pune"
// }`;

// const Objformat = JSON.parse(Jsondata)
// console.log(`JSON to Obj format: `,Objformat);



// custom promise
// const p1 = new Promise((resolve, reject) => {
//     // resolve("HEkklo");
//     reject('Failed');
// })
// p1.then((data) => console.log(data))
// .catch((err) => console.log(err));


// let num = 16;
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise Fulfilled');
//         // reject('Promise Rejected')
//     }, 2000)
// }).then((data) => console.log(data))
//     .catch(err => console.log(err))
// .finally(console.log("Promise Completed"));

// Callback example with promises

const orderDetails = {
    orderId: 2324,
    orderItems: ["pizza", "biryani", "coke"],
    cost: 520,
    restaurant_location: "Wanwadi",
    customer_location: "Pune",
    customer_name: "Aman",
}

function placeOrder(orderDetails) {
    console.log(`Transaction for order id ${orderDetails.orderId} initiated`);
    console.log(`Your Order for ${orderDetails.cost} is processing`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Payment of ${orderDetails.cost} is Successful 🎉`);
            orderDetails.paymentStatus = true;
            resolve(orderDetails);
        }, 2000);
    })
}
function prepareOrder(orderDetails) {
    console.log(`Your Order for ${orderDetails.orderItems} is being prepared`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${orderDetails.orderItems} Prepared 🎉`);
            orderDetails.token = 10;
            resolve(orderDetails);
        }, 2000);
    })
}
function pickUpOrder(orderDetails) {
    console.log(`Your Order is in ${orderDetails.restaurant_location} restaurant`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order out for delivery for ${orderDetails.customer_location} 🎉`);
            orderDetails.outForDelivery = true;
            resolve(orderDetails);
        }, 2000);
    })
}
function deliverOrder(orderDetails) {
    console.log(`Your delivery boy is arriving at ${orderDetails.customer_location}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order collected by ${orderDetails.customer_name}`)
            console.log(`Order Delivered Successfully 🎉`);
            orderDetails.delivered = true;
            resolve(orderDetails);
        }, 2000);
    })
}

// Callback Hell

// placeOrder(orderDetails, () => {
//     prepareOrder(orderDetails, () => {
//         pickUpOrder(orderDetails, () => {
//             deliverOrder(orderDetails, () => {
//                 console.log(orderDetails);
//             })
//         });
//     });
// });

// Promise better then callback

placeOrder(orderDetails)
    // .then(data => console.log(data));
    .then((orderDetails) => prepareOrder(orderDetails))
    .then((orderDetails) => pickUpOrder(orderDetails))
    .then((orderDetails) => deliverOrder(orderDetails))
    .catch((err) => console.log(err))
    .finally(() => console.log(`Order Completed`));