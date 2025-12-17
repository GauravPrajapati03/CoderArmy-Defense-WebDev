
const orderDetails = {
    orderId: 233,
    orderItems: ['pizza', 'biryani', 'sprite'],
    cost: 630,
    customer_location: "Pune",
    restaurant_location: "Wanwadi",
    customer_name: "Aman"
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


async function ordering() {

    try {
        let res1 = await placeOrder(orderDetails);
        let res2 = await prepareOrder(res1);
        let res3 = await pickUpOrder(res2);
        let res4 = await deliverOrder(res3);
        console.log(res4);

        // now here the code is synchronous and it will execute one after the another
        // but if we want to execute them in parallel then we have to use promises.all

        // const res = await Promise.all([
        //     placeOrder(orderDetails),
        //     prepareOrder(orderDetails),
        //     pickUpOrder(orderDetails),
        //     deliverOrder(orderDetails)
        // ]);
        // console.log(res);
    } catch (err) {
        console.log(err)
    }
}

// ordering();



// Async Functions always returns promises
// tryCatch block is used to handle errors using async/await

async function riskyOperation() {
    try {
        const result = await mightFail();
        console.log(result);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('File not found');
        }
        if (err.code === 'NETWORK_ERROR') {
            console.error('Network error');
        }
        console.error(err);
        throw err;
    }
}

// Hypothetical Situation - to get all the task done parallel

async function doAllTasks() {
    // const task1 = await task1();
    // const task2 = await task2();
    // const task3 = await task3();

    // await Promise.all([task1, task2, task3]);

    // const comments = await fetch("User Comments");
    // const photos = await fetch("user photos");
    // const videos = await fetch("user videos");

    const [comments, photos, videos] = await Promise.all([        // all will start its execution at the same time
        fetch("User Comments"),
        fetch("user photos"),
        fetch("user videos")
    ]);
}

// Handling multiple operations
async function loadDashboard() {
    try {
        const [getUser, getNotifications, getStats] = await Promise.all([
            getUser(), getNotifications(), getStats()
        ]);

        return { getUser, getNotifications, getStats }
    } catch (err) {
        console.log(`Failed to load Dashboard: `, err);
    }
}

// loadDashboard();

// conditional await

async function getData() {
    if (useCache) {
        return getCachedData();
    }
    return await fetchFreshData();
}

// getData();


// Rejected Promise
async function rejPromise() {
    try {
        const data = await Promise.reject(new Error('Promise Rejected!'));
    } catch (err) {
        console.log(err.message);       // Promise Rejected!
    }
}
// rejPromise()


// Thrown Error
async function thrownError() {
    try {
        // const res = await Promise.resolve("Promise Resolved!");
        // console.log(res);
        throw new Error("Something Went Wrong");
    } catch (error) {
        console.log(error.message);
    }
}
// thrownError();

// Runtime Error
async function runtimeError() {
    try {
        const obj = null;
        console.log(obj.property);      // Type Error
    } catch (err) {
        console.log(err.message);       // Cannot read properties of null (reading 'property')
    }
}
// runtimeError();


// Real World Example

async function fetchUsers(id) {
    try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        // fetch doesn't reject on HTTP errors (404, 500, etc.)
        if (!resp.ok) {
            throw new Error(`Http error, status: ${resp.status}`);
        }
        const user = await resp.json();
        console.log(user);
    } catch (err) {
        console.log(err.message)
    }
}

fetchUsers(2);
