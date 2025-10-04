// Date - fetched from our computer

// UTC time is same everywhere across the globe
// This number represents the total milliseconds that have passed since a universal starting point: the Unix Epoch, which is midnight on January 1st, 1970, UTC (01-jan-1970).


// Key Points
// 1. **Months are 0-indexed.** This is the #1 source of bugs, but days start at 1
// 2. **Dates are Mutable.** Setter methods change the original object.
// 3. **String Parsing is Unreliable.** Never use `new Date("some-date-string")`.
// 4. **Timezones are Complex.** Always be aware of whether you are working with local time or UTC time. Send UTC timestamps to servers.


// ## The Solution:

// Because `Date` is so bad, developers use libraries:

// - **Day.js** (lightweight, 2KB)
// - **date-fns** (functional, tree-shakeable)
// - **Luxon** (modern, powerful)
// ## The Future: **Temporal API** ⏰
//JavaScript is getting a **new date/time API called Temporal** that fixes all these issues

// Much better!
// const date = Temporal.PlainDate.from('2025-10-01');
// date.add({ days: 3 }); // Returns new date, immutable!
// date.toString(); // '2025-10-01' (clean!)





//Date object created by => new Date() - constructor
let UTC = new Date();       // Universal Time Co-ordinate
let IST = Date();       // Indian Standard Time
console.log(`UTC `, UTC);
console.log(`IST `, IST);

let now = new Date();
console.log(now.toString());    // when we do toString() then it shows our time in IST from UTC
console.log(`toISOString()`, now.toISOString());
console.log(`toUTCString()`, now.toUTCString());
console.log(`toLocaleString()`, now.toLocaleString());

// operations/ get info from date object(getters)
console.log(`getDay() `, now.getDay());     // days start from 1
console.log(`getDate() `, now.getDate());
console.log(`getMonth() `, now.getMonth());     // month starts from 0 so jan - 0, and so on
console.log(`getFullYear() `, now.getFullYear());
console.log(`getHours() `, now.getHours());
console.log(`getMinutes() `, now.getMinutes());
console.log(`getSeconds() `, now.getSeconds());
console.log(`getMilliseconds() `, now.getMilliseconds());

// custom date - Create a Specific Date new Date(year, month, day, hours, minutes, seconds, ms);
let currDate = new Date(2024, 9, 16, 16, 30, 34, 555);  // i have given month 9 but it outputs 10 - for october
console.log(currDate);  // UTC 
console.log(currDate.toString());   // IST


// millisecond time format
const milliseconds = Date.now();
console.log(`Milliseconds time Format `, milliseconds);

// let currMilliSec = new Date(1759487985973);  // current UTC millisecond time
// let currMilliSec = new Date(0);     // 1970
let currMilliSec = new Date(-35432134565);     // 1968

console.log(`new Date(1759487985973) `, currMilliSec);


// Setting a date - setters and mutability
// Date objects are mutable, meaning they can change their value in place using 'setter' methods

const day = new Date(1759489226224);
console.log(`Before `, day.toString());

day.setFullYear(1999);
day.setMonth(3);
day.setHours(19);
console.log(`After `, day.toString());


// Date Auto-Correction (Rollover)

const wrongDate = new Date(2025, 1, 30);
console.log(`wrongDate `, wrongDate);   // 2025-03-01
console.log(`wrongDate `, wrongDate.toString());   // Sun Mar 02 2025


// Format Dates for Displaying

const currTime = new Date();
console.log(currTime)   // 2025-10-03T11:13:20.660Z
console.log(currTime.toString());   // Fri Oct 03 2025 16:42:53 GMT+0530 (India Standard Time)
console.log(currTime.toDateString());  // Fri Oct 03 2025
console.log(currTime.toISOString());    // 2025-10-03T11:14:25.629Z
console.log(currTime.toLocaleString());    // 3/10/2025, 4:44:25 pm