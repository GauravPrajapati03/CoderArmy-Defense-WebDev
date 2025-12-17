// Async await

// Async function always returns a promise
async function greet() {
    return `Hello`;
}

// same as above
// function greet() {
//     return new Promise((resolve, reject) => {
//         resolve('Helllo');
//     })
// }

// const res = await greet();
// console.log(res)



// Using Promises
// fetch('https://api.github.com/users')
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err.message));


// Using async await
// const res = await fetch('https://api.github.com/users');
// // here if we dont use await then it will go to next line and here response is not received so it gives error
// const data = await res.json();
// // we will have to use await for converting to json because its async task 'Promise { <pending> }'
// console.log(data);

// // these sync tasks are blocked until the fetch brings the data, these could not execute and they run at last
// console.log(`Hello World`);
// console.log(`Hi`);


// But this it is not recommended to use the await in global scope although it can be used without the async but it is ok to use await without async from 2022 update

// async function githubUsers() {
//     console.log(`Start function`)
//     const resp = await fetch('https://api.github.com/users')
//     const data = await resp.json();
//     console.log(data[0]);
//     console.log(`End function`)
// }

// console.log(`Open`)
// githubUsers();
// console.log(`Close`)


async function fetchUsers() {
    try {
        const resp = await fetch('https://api.github.com/users');
        if(!resp.ok) {
            throw new Error(`Data not found `, resp.statusText);
        }
        const data = await resp.json();
        // console.log(data[0]);
        displayUsers(data);
    } catch (err) {
        console.log(err.message);
    }
}

const displayInfo = document.getElementById('displayInfo');
const closeBtn = document.querySelector('.close')

fetchUsers()

function displayUsers(users) {
    const container = document.getElementById('container');

    // for (const user of users) {
    //     const div = document.createElement('div');
    //     div.classList.add('user');
    //     const image = document.createElement('img');
    //     image.classList.add('userImg');
    //     const name = document.createElement('h2');
    //     name.classList.add('name');
    //     const anchor = document.createElement('a');
    //     anchor.classList.add('anchor');

    //     image.src = user.avatar_url;
    //     // div.append(image);

    //     name.textContent = user.login;
    //     // div.append(name)

    //     anchor.textContent = "Visit Profile"
    //     anchor.href = user.html_url;
    //     anchor.setAttribute("target", "_blank");
    //     // div.append(anchor)

    // div.append(image, name, anchor);

    //     container.append(div)
    // }

    // users.forEach(user => {
    //     const div = document.createElement('div');
    //     div.classList.add('user');
    //     const image = document.createElement('img');
    //     image.classList.add('userImg');
    //     const name = document.createElement('h2');
    //     name.classList.add('name');
    //     const anchor = document.createElement('a');
    //     anchor.classList.add('anchor');

    //     image.src = user.avatar_url;
    //     // div.append(image);

    //     name.textContent = user.login;
    //     // div.append(name)

    //     anchor.textContent = "Visit Profile"        
    //     anchor.href = user.html_url;
    //     anchor.setAttribute("target", "_blank");
    //     // div.append(anchor)

    //     div.append(image, name, anchor);

    //     container.append(div)
    // }) 

    users.forEach((user, index) => {
        const div = document.createElement('div');
        div.className = 'user';
        div.dataset.index = index;

        div.innerHTML = `
            <img src="${user.avatar_url}" class="userImg">
            <h2 class="name">${user.login}</h2>
            <a class="anchor" href="${user.html_url}" target="_blank">Visit Profile</a>
        `;

        container.appendChild(div);
    });

    attachClickHandler(users);
}

closeBtn.addEventListener('click', () => {
    displayInfo.style.display = "none";
})

displayInfo.addEventListener('click', (e) => {
    if (e.target === displayInfo) {
        displayInfo.style.display = "none";
    }
})


function attachClickHandler(users) {
    const container = document.getElementById('container');

    container.addEventListener('click', async (e) => {
        const card = e.target.closest('.user');
        if (!card) return;

        // prevent anchor click
        if (e.target.tagName === 'A') return;

        const index = card.dataset.index;
        const user = users[index];

        const res = await fetch(user.url);
        const details = await res.json();

        openModal(details);
    });
}


function openModal(details) {
    document.querySelector('.modalImg').src = details.avatar_url;
    // document.getElementById('modalName').textContent = details.name || 'N/A';
    // document.getElementById('modalLogin').textContent = details.login;
    // document.getElementById('modalId').textContent = details.id;
    // document.getElementById('modalRepos').textContent = details.public_repos;
    // document.getElementById('modalFollowers').textContent = details.followers;
    // document.getElementById('modalFollowing').textContent = details.following;
    // document.getElementById('modalLocation').textContent = details.location || 'N/A';
    // document.getElementById('modalCompany').textContent = details.company || 'N/A';
    // document.getElementById('modalBlog').textContent = details.blog || 'N/A';
    // document.getElementById('modaltwitter').textContent = details.twitter_username || 'N/A';
    // document.getElementById('modalType').textContent = details.type || 'N/A';
    // document.getElementById('modalViewType').textContent = details.user_view_type || 'N/A';
    // document.getElementById('modalAdmin').textContent = details.site_admin;
    // document.getElementById('modalGists').textContent = details.public_gists;


    setText('modalName', details.name);
    setText('modalId', details.id);
    setText('modalLogin', details.login);
    setText('modaltwitter', details.twitter_username);
    setText('modalRepos', details.public_repos);
    setText('modalGists', details.public_gists);
    setText('modalFollowers', details.followers);
    setText('modalFollowing', details.following);
    setText('modalLocation', details.location);
    setText('modalType', details.type);
    setText('modalViewType', details.user_view_type);
    setText('modalAdmin', details.site_admin);
    setText('modalBlog', details.blog);
    setText('modalCompany', details.company);


    displayInfo.style.display = 'flex';
}

function setText(id, value) {
    document.getElementById(id).textContent = value ?? 'N/A';
}

