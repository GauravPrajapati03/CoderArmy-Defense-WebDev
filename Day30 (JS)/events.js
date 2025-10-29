// Method 1 not used
function handleClick() {
    const text = document.getElementById('change');
    text.textContent = "Thank you For Clicking BYE";
}

// Method 2 not used because it does not allow to listen multiple events it overwrites the event with recent one it is like a value assiged to the Object
const change = document.getElementById('change');
change.onclick = function () {
    change.textContent = "content changed";
}
change.onclick = function () {
    change.textContent = "Overwrites the event";
}

// Method 3 recommended method because it allows to listen multiple on same target it is like the method of the object we works as many times as we call it
const content = document.getElementById('content');
content.addEventListener('click', () => {
    content.textContent = "Changed by eventlistener";
    content.style.color = "red";
})
content.addEventListener('click', () => {
    content.style.backgroundColor = "yellow"
})

// Explanation of above
const Obj = {
    onclick: 10,
    eventListen: function (name) {
        console.log(`Hello ${name}`)
    }
}
Obj.onclick = 20;
Obj.onclick = 30;  // overwritten to this value
// console.log(Obj.onclick);

// Obj.eventListen("Gaurav");  // can be called multiple times
// Obj.eventListen("Amit");
// Obj.eventListen("Arjun");

// Using for loop for applying event listener on multiple elements
// const child1 = document.getElementById('child1');
// child1.addEventListener('click', () => {
//     child1.textContent = "I am Clicked";
// })

// This method is not recommended to add eventlistener to each element one by one so we can use the loop
const par = document.getElementById('par');
// console.log(par.children);

// const children = par.children;
// for(let i=0; i<children.length; i++) {
//     // console.log(parent.children[i]);
//     children[i].addEventListener('click', () => {
//         children[i].textContent = "I am clicked";
//     })
// }

// for (const child of par.children) {
//     child.addEventListener('click', () => {
//         child.textContent = "I am Clicked";
//     })
// }

// Using Event bubbling
par.addEventListener('click', (e) => {
    // console.log(e.target);
    e.target.textContent = "I am done by Event bubbling";
})
// This is also not the recommended way because if there are many targets it will reduce performance


// Event bubbling - recomended and dynamic
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// grandparent.addEventListener('click', () => {
//     console.log(`grand parent is clicked`);
// }, true)    // denotes capture phase is on or off, by default it is false means it is on
// The capture phase true means while traversing from the window to target it will check one by one if there is any event listener above it and if it is there the first execute the action of event of it
// When the capture phase is false in default first it traverses till the target element and then after its action then while coming back to window object if there is any listener on the above elements then those will execute their action

// parent.addEventListener('click', () => {
//     console.log(`parent is clicked`);
// }, false)   // executes later in bubble phase

// child.addEventListener('click', () => {
//     console.log(`child is clicked`);
// }, true)

// Capture phase ON : Top to down us time par event trigger ker diya jayega
// Capture phase OFF : Down to Top(Bubbling phase) me trigger kiya jayega


// Event Object
grandparent.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = "black";
})
// parent.addEventListener('click', (e) => {
//     console.log(e);
// })
// child.addEventListener('click', (e) => {
//     console.log(e);
//     e.stopPropagation();    // we can stop bubbling also
// })

// remove event listener
const myparent = document.getElementById('myparent')

// myparent.addEventListener('click', (e) => {
//     e.target.textContent = "Event Occurred";
// })
// This is not correct way to remove event listener because the function in both cases are same but they are assigned different memory and this will not remove the listener
// ❌wrong way
// myparent.removeEventListener('click', (e) => {
//     e.target.textContent = "Event Removed";
// })

// ✅correct way - create a function and give the same function to both

function handleClick(e) {
    e.target.textContent = "Event Occurred";
    // This can be used to only trigger the event once and then remove the event listener
    myparent.removeEventListener('click', handleClick); // once it will work and then be removed
}
myparent.addEventListener('click', handleClick);
// myparent.removeEventListener('click', handleClick);






// The 'event' is what happens (like a click, keydown, etc.)
// The 'listener' is what detects that event
// The 'handler' is what responds to it

// Selecting the Target elements
const btn = document.getElementById("btn");
const text = document.getElementById('text');

// define the handler function or action - function executed after the event occurs
function buttonHandler() {
    console.log("Button Clicked");
    text.textContent = "Action Performed Successfully";
    text.style.color = "green";
}

// Attach the event listener
btn.addEventListener('click', buttonHandler);

// Critical Point: We pass the function name buttonHandler directly. We do not call it with (). We are giving addEventListener a reference to our function—the "recipe"—to be used later.


// Mouse Events
const click = document.getElementById("click");
const dblClick = document.getElementById("dblClick");
const mousedown = document.getElementById("mousedown");
const mouseup = document.getElementById("mouseup");
const mouseMove = document.getElementById("move");
const mouseEnter = document.getElementById("enter");
const mouseLeave = document.getElementById("leave");
const mouseOver = document.getElementById("over");
const mouseOut = document.getElementById("out");


click.addEventListener('click', (e) => console.log('Clicked'));
dblClick.addEventListener('dblclick', (e) => console.log('Double Clicked'));
mousedown.addEventListener('mousedown', (e) => console.log('Mouse Down'));
mouseup.addEventListener('mouseup', (e) => console.log('Mouse Up'));
mouseMove.addEventListener('mousemove', (e) => console.log('Mouse Move'));
mouseEnter.addEventListener('mouseenter', (e) => console.log('Mouse Enter'));
mouseLeave.addEventListener('mouseleave', (e) => console.log('Mouse Leave'));
mouseOver.addEventListener('mouseover', (e) => console.log('Mouse Over'));
mouseOut.addEventListener('mouseout', (e) => console.log("Mouse Out"));


// Keyboard Events
// document.addEventListener('keydown', (e) => {
//     console.log('Key Pressed: ', e.key);
// console.log('Key code: ', e.code);
// console.log('Ctrl pressed: ', e.ctrlKey);
// console.log('Shift Pressed: ', e.shiftKey);
// console.log('Alt Pressed: ', e.altKey);
// });

// document.addEventListener('keyup', console.log('Key Released'));
// document.addEventListener('keypress', console.log('Key Press'));


// Form Events
const form = document.querySelector('form');
const input = document.getElementsByClassName('input');  // for loop
// const input = document.querySelectorAll('.input');      // forEach
// console.log(input);

// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener('focus', () => console.log('input focused'));
// }

// works with both ways of selecting
// for (let elem of input) {
//     elem.addEventListener('focus', () => console.log('input focused'));
// }

// modern approach - requires querySelectorAll()
// input.forEach(elem => {
//     elem.addEventListener('focus', () => console.log('input focused'));
// });


// Only one .input element	document.querySelector('.input')	Returns a single element
// Multiple .input elements	document.querySelectorAll('.input')	Lets you loop and attach to each one


for (let elem of input) {
    // elem.addEventListener('focus', () => console.log('input focused'));       // works on clicking both label and input box
    // elem.addEventListener('blur', () => { console.log(`Input blurred`); });   // only works on clicking th label
    elem.addEventListener('input', (e) => console.log("Target value ", e.target.value));
    elem.addEventListener('change', (e) => console.log('Changed value ', e.target.value));  // change event fires after a value has been changed and the input loses focus
    // change - Whenever this input’s value changes and the user is done editing, run this function
}

// Prevent From Submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target.email.value);
    console.log(`Form Submitted`);
    // let email = e.target.email.value;
    // let password = e.target.password.value;
    // console.log(`Email ${email}, Password ${password}`);


    // destructuring
    // const {email, password} = e.target;
    // console.log(`Email ${email.value}, Password ${password.value}`);

    // formData
    const data = new FormData(e.target);
    console.log(data);
    let email = data.get('email');
    let password = data.get('password');
    console.log(`Email ${email}, Password ${password}`);

    const Obj = Object.fromEntries(data.entries());
    console.log(Obj);
})

// Object.fromEntries() - takes an array (or iterable) of key–value pairs and converts it into a plain JavaScript object.
// This -> [ ['key1', 'value1'], ['key2', 'value2'] ] to This -> { key1: 'value1', key2: 'value2' }



// Window Object
window.addEventListener("load", () => console.log('Page Loaded'));
window.addEventListener('DOMContentLoaded', console.log("DOM is Ready"));
window.addEventListener('resize', () => console.log(`window resized`));
window.addEventListener('scroll', () => console.log(`Scrolled`));


// Event Object - full of Information

// target attribute - event.target
const myevent = document.getElementById('event');
myevent.addEventListener('click', (e) => {
    console.log(e);
})
// This property tells you the specific element that triggered the event. This is incredibly useful when you have one listener on a parent element watching for clicks on many children.
const itemList = document.getElementById('item-list')
itemList.addEventListener('click', (e) => {
    console.log(e.target.textContent);    // this pattern is event delegation, its very efficient
});


// preventDefault()
// This method stops the browser's default behavior for an element.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Stops the browser from reloading the page
})

// Removing Event Listeners
// CRITICAL RULE: To remove a listener, you must have a reference to the exact same function that was used to add it. This means you cannot use an anonymous function.
// This works:
// function handleMouseMove() { /* ... */ }
// window.addEventListener('mousemove', handleMouseMove);
// window.removeEventListener('mousemove', handleMouseMove); // Correct!

// This does NOT work:
// window.addEventListener('mousemove', () => { /* ... */ });
// window.removeEventListener('mousemove', () => { /* ... */ }); // WRONG! This is a different anonymous function.


