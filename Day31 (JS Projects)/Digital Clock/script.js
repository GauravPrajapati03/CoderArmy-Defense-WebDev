
const time = document.getElementById('time');

setInterval(() => {
    const date = new Date();
    const currTime = date.toLocaleTimeString()

    time.textContent = currTime;
}, 1000)