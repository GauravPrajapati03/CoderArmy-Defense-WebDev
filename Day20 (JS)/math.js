// math properties and methods

console.log(`PI `, Math.PI);   // PI value
console.log(`Eulers no `, Math.E);    // Eulers Number


// Rounding
// .Round -> standard rounding to nearest integers, if greater then .5 then upper value else lower value
console.log(`round `, Math.round(1234.6));

// .ceil  -> rounds up to nearest integer, always upper value
console.log(`ceil `, Math.ceil(12.43));

// floor  -> rounds down to nearest integer, always lower value
console.log(`floor `, Math.floor(97.89))

// trunc  -> 
console.log(`trunc `, Math.trunc(92.14))


// common functions
console.log(`abs `, Math.abs('-120.32'));  // absolute value
console.log(`pow `, Math.pow(3, 3));    // x to power of y => 3^3 = 27 same as x**y
console.log(`sqrt `, Math.sqrt(2));     // sqrt sqrt2 = 1.414
console.log(`max `, Math.max(42, 36, 2, 4, 45, 1, 14, 6));     // maximum value
console.log(`min `, Math.min(42, 36, 2, 4, 45, 1, 14, 6))      // minimum value

console.log(`random `, Math.random());  // returns a pseudo random value between 0(inclusive) & 1(exclusive) => [0 - 1)

console.log(`random `, Math.floor(Math.random() * 10));     // 0-9 random value


// ** Math.floor(Math.Random() * (max - min + 1) * min);
// random value between 100-999
console.log(`random 100 - 999`, Math.floor(Math.random() * (999 - 100 + 1), 100));


function getRandomNo(mini, maxi) {
    const range = (maxi - mini) + 1;

    const scaled = Math.random() * range;

    const floored = Math.floor(scaled);

    const res = floored + scaled;
    return res;
}

getRandomNo()
getRandomNo()
getRandomNo()
getRandomNo()