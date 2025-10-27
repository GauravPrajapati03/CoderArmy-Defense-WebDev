// console.log("Hello from js file")


// Create a new Element
const newElem = document.createElement("h2");
newElem.textContent = "This is a New Element";
newElem.id = "first";

// This is the **best and safest way** to manage an element's classes. Forget about `.className`.

// - `.add('className')`: Adds a new class.
// - `.remove('className')`: Removes a class.
// - `.toggle('className')`: Adds the class if it's missing, removes it if it's there.
// - `.contains('className')`: Checks if an element has a class (returns `true` or `false`).


// newElem.className = "myClass";      // not recommended when we have to add more than 1 classnames
// newElem.className += " new";
// we use .className because class is an already used keyword in JS
newElem.classList.add("one");
newElem.classList.add("two");
newElem.classList.add("three");
newElem.classList.remove("three");


// Dyanmic/inline styles - for static styles use .classlist
newElem.style.backgroundColor = "orange";
newElem.style.fontSize = "40px";
newElem.style.color = "blue";

console.log(newElem);

// Select the element to add the element
const h1 = document.getElementById('hello');
console.log(h1);


// Add the element

// h1.before(newElem)
h1.after(newElem)

// attributes
console.log(newElem.getAttribute('id'));
console.log(newElem.getAttribute('class'));

newElem.setAttribute("hello", "world");
console.log(newElem.getAttribute('hello'));


// /Append, prepend, insert in the middle
const li1 = document.createElement('li');
li1.textContent = "Milk";
li1.style.backgroundColor = 'red';

const li2 = document.createElement('li');
li2.textContent = "ghee";
li2.style.backgroundColor = 'blue';

const li3 = document.createElement('li');
li3.textContent = "paneer";
li3.style.backgroundColor = 'green';

const li4 = document.createElement('li');
li4.textContent = "yoghurt";
li4.style.backgroundColor = 'orange';

// const unorderli = document.getElementById('items');
// console.log(unorderli);

// unorderli.append(li1)   // add in bottom
// unorderli.append(li2)
// unorderli.prepend(li4)      // add at top

// both to add item in the middle
// li1.append(li3)
// li1.after(li3);



// const foodItems = ['Milk', "ghee", "paneer", "yoghurt"];
// const ul = document.getElementById('items');

// for (let item of foodItems) {
//     const li = document.createElement('li');
//     li.textContent = item;
//     li.style.color = 'yellow';
//     ul.append(li);  // this puts stress on the frontend if array has many 1000s of elements so it is not used
// }
// for every element the layout is rerendered so 1000s times layout is rendered on frontend


// (optimised) recomended way to add elements in list use documentFragment
// approach - first create all the elements and when all the elements are created in the list then send/render it on the frontend at once

const foodItems = ['Milk', "Ghee", "Paneer", "Coffee"];
const ul = document.getElementById('items');
// const fragment = document.createDocumentFragment();

// creating custom fragment option
const tempFragment = [];

for (const item of foodItems) {
    const list = document.createElement("li");
    list.textContent = item;
    tempFragment.push(list);
}
ul.append(...tempFragment);


// Delete/remove any element
const h3 = document.getElementsByTagName('h3');
console.log(h3)     // HTMLCollection [h3#del, del: h3#del]
console.log(h3[0])  // <h3 id="del">To be deleted</h3>
console.log(h3[0].textContent)  // To be deleted

const del = document.getElementById('del');
del.remove();   // removed the element from frontend


// Older method of adding list
const month = document.getElementById('list');
console.log(month.children);    // HTMLCollection(3) [li, li, li]
console.log(month.childNodes);  // NodeList(7) [text, li, text, li, text, li, text] - text is the space('\n') after the list item => data: "\n        "
// childNodes also considers spaces and it is very confusing for developers



// new item added using older method
const newItem = document.createElement("LI");
newItem.textContent = "April";

// month.insertAdjacentElement("afterbegin", newItem);  // .prepend()
// month.insertAdjacentElement("afterend", newItem);    // .after()
// month.insertAdjacentElement("beforebegin", newItem); // .before()
month.insertAdjacentElement('beforeend', newItem);      // .append()


// IMP -- do not use .innerHTML it is very dangerous
// never use innerHTML to show the content created by user, if it is created by developer then its OK to use
// because it can cause serious problems

// For example the developer stores the comments which are given by the user using innerHTML then this can be threat
// because the innerHTML renders the HTML and not only the text inside it

const threat = document.createElement("li");
threat.innerHTML = "<h2>i am a threat</h2>";    // h2 is also shows effect
// threat.innerHTML = "<img src='https://images.unsplash.com/photo-1761405378542-d0d77b54881b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764'>";     // image gets rendered
// threat.innerHTML = "<script> alert('Threat'); </script>";
// month.insertAdjacentElement("beforeend", threat);
month.append(threat);

// Our data can be hacked by innerHTML because if someone puts malicious code to get the cookies or token then he can access your account without authorization
// ***The Security Risk (XSS - Cross-Site Scripting): Never use .innerHTML with content provided by a user (like a comment or a username). If a user enters malicious <script> code, .innerHTML will execute it, allowing the user to attack your website and its visitors.

// So to be safe always use .textContent to change the text content
// because this only see the content as text and it prints it as it is

const simple = document.createElement('li');
// simple.textContent = '<h2>i am not a threat</h2>'
simple.textContent = "<img src='https://images.unsplash.com/photo-1761405378542-d0d77b54881b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764'>";     // image gets rendered
// month.insertAdjacentElement("beforeend", simple);
month.prepend(simple);



// Document Fragment
// A DocumentFragment is a lightweight, in-memory DOM node that is not part of the main document tree. It's a temporary, invisible container.
// - The key difference: Modifying a DocumentFragment is extremely cheap. Since it's not part of the visible page, changing it does not trigger any reflows or repaints.

// Without fragment
const myList = document.getElementById('myList');
console.log(myList);

// console.time("Loop Without Fragment");

// for (let i = 0; i < 700; i++) {
//     const newItem = document.createElement("li");
//     newItem.textContent = `Item ${i + 1}`;
//     myList.append(newItem);
// }

// console.timeEnd("Loop Without Fragment");
// Loop Without Fragment: 1.363037109375 ms

// console.time('Loop with Fragment');
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 700; i++) {
//     const newItem = document.createElement("li");
//     newItem.textContent = `Item ${i + 1}`;
//     fragment.append(newItem);
// }
// myList.append(fragment);

// console.timeEnd('Loop with Fragment');
// Loop with Fragment: 0.87890625 ms