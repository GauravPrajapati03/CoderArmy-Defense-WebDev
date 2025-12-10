const body = document.querySelector('body');
const container = document.getElementById('container')



// container.addEventListener('click', (e) => {
//     let color = e.target.id;
//     body.style.backgroundColor = color;
// })


function changeBg(e) {
    // console.log(e.target.textContent);
    let color = e.target.id;
    body.style.backgroundColor = color
}

container.addEventListener('click', changeBg);