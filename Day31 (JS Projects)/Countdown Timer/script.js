
const result = document.querySelector('#result');

setInterval(() => {
    const olympicTime = new Date(2028, 6, 14);
    // const currTime = Date.now();
    const currTime = Date.now();

    // console.log(olympicTime.getTime());

    let timer = olympicTime - currTime;

    let days = Math.floor((timer) / (1000 * 60 * 60 * 24));
    timer %= (1000 * 60 * 60 * 24);

    let hours = Math.floor((timer) / (1000 * 60 * 60));
    timer %= (1000 * 60 * 60);

    let mins = Math.floor(timer / (1000 * 60));
    timer %= (1000 * 60);

    let sec = Math.floor(timer / 1000);
    timer %= 1000;

    result.textContent = `${days} Days, ${hours} Hours, ${mins} Minutes, ${sec} Seconds`;
}, 1000)
