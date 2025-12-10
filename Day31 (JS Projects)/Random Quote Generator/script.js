// https://dummyjson.com/quotes


const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "The best way to predict the future is to create it. — Peter Drucker",
    "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "Believe you can and you’re halfway there. — Theodore Roosevelt",
    "If you want to lift yourself up, lift up someone else. — Booker T. Washington",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
    "Act as if what you do makes     a difference. It does. — William James",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "Doubt kills more dreams than failure ever will. — Suzy Kassem",
    "The harder you work for something, the greater you’ll feel when you achieve it. — Unknown",
    "In the end, we only regret the chances we didn’t take. — Lewis Carroll",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "The future depends on what you do today. — Mahatma Gandhi",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Dream bigger. Do bigger. — Unknown",
    "Hard work beats talent when talent doesn’t work hard. — Tim Notke",
    "Great things never come from comfort zones. — Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. — Unknown",
    "Wake up with determination. Go to bed with satisfaction. — George Horace Lorimer",
    "The key to success is to start before you’re ready. — Marie Forleo",
    "If you get tired, learn to rest, not to quit. — Banksy",
    "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
    "Your limitation—it’s only your imagination. — Unknown",
    "Don’t wait for opportunity. Create it. — Unknown",
    "Success doesn’t just find you. You have to go out and get it. — Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. — Unknown",
    "Dream it. Believe it. Build it. — Unknown",
    "A little progress each day adds up to big results. — Satya Nani",
    "Make each day your masterpiece. — John Wooden",
    "Success is what comes after you stop making excuses. — Luis Galarza",
    "Don’t wish it were easier. Wish you were better. — Jim Rohn"
];


const quote = document.querySelector('#quote h1');
const button = document.querySelector('button');

function randomQuote() {
    const idx = Math.floor(Math.random() * 40);
    quote.textContent = quotes[idx];
}

button.addEventListener('click', randomQuote);