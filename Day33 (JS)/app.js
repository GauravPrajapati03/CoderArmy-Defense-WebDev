
const orderDetails = {
    orderId: 233,
    orderItems: ['pizza', 'biryani', 'sprite'],
    cost: 630,
    customer_location: "Pune",
    restraunt_location: "Wanwadi",
    customer_name: "Aman"
}

// function placeOrder(orderDetails, prepare) {
//     console.log(`Order Id ${orderDetails.orderId} initiated`);
//     console.log(`Your payment for ${orderDetails.cost} is processing`);
//     setTimeout(() => {
//         console.log(`${orderDetails.cost} Payment received Successful`);
//         prepare(orderDetails);
//     }, 2000);
// }

// function prepareOrder(orderDetails, pickup) {
//     console.log(`Order for ${orderDetails.orderItems} is being prepared`);

//     setTimeout(() => {
//         console.log(`Order ready to deliver`);
//         orderDetails.status = true;
//         pickup(orderDetails);
//     }, 2000);
// }

// function pickupOrder(orderDetails, deliver) {
//     console.log(`Delivery boy on the way to pick order from ${orderDetails.restraunt_location}`);

//     setTimeout(() => {
//         console.log(`Order collected by delivery boy and out for ${orderDetails.customer_location}`);
//         orderDetails.outForDelivery = true
//         deliver();
//     }, 3000);
// }

// function deliverOrder(orderDetails) {
//     console.log(`Delivery boy on the way to deliver the order`);

//     setTimeout(() => {
//         console.log(`Order Delivered Successfully to ${orderDetails.customer_name}`);
//         orderDetails.deliverStatus = true;
//         console.log(orderDetails)
//     }, 3000);
// }

// placeOrder(prepareOrder(deliverOrder));     // not correct way

// Callback hell - multiple callbacks nested inside one another
// placeOrder(() => {
//     prepareOrder(() => {
//         pickupOrder(() => {
//             deliverOrder();
//         });
//     });
// });

// chain of callbacks
// placeOrder(orderDetails, () => {
//     prepareOrder(orderDetails, () => {
//         pickupOrder(orderDetails, () => {
//             deliverOrder(orderDetails);
//         });
//     });
// });


function showMessage(msg) {
    const output = document.getElementById('output');
    output.innerHTML += msg + `<br/> <br>`;
}

function placeOrder(orderDetails, prepare) {
    showMessage(`Order Id ${orderDetails.orderId} initiated`);
    showMessage(`Your payment for ${orderDetails.cost} is processing`);
    setTimeout(() => {
        showMessage(`${orderDetails.cost} Payment received Successful`);
        prepare(orderDetails);
    }, 2000);
}

function prepareOrder(orderDetails, pickup) {
    showMessage(`Order for ${orderDetails.orderItems} is being prepared`);

    setTimeout(() => {
        showMessage(`Order ready to deliver`);
        orderDetails.status = true;
        pickup(orderDetails);
    }, 2000);
}

function pickupOrder(orderDetails, deliver) {
    showMessage(`Delivery boy on the way to pick order from ${orderDetails.restraunt_location}`);

    setTimeout(() => {
        showMessage(`Order collected by delivery boy and out for ${orderDetails.customer_location}`);
        orderDetails.outForDelivery = true
        deliver();
    }, 3000);
}

function deliverOrder(orderDetails) {
    showMessage(`Delivery boy on the way to deliver the order`);

    setTimeout(() => {
        showMessage(`Order Delivered Successfully to ${orderDetails.customer_name}`);
        orderDetails.deliverStatus = true;
        showMessage(JSON.stringify(orderDetails));
    }, 3000);
}

placeOrder(orderDetails, () => {
    prepareOrder(orderDetails, () => {
        pickupOrder(orderDetails, () => {
            deliverOrder(orderDetails);
        });
    });
});