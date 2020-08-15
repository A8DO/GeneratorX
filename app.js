const quoteHolder = document.getElementById('quote1-holder');
const quote = document.getElementById('quote1');
const generateButton = document.querySelector('#generate');
const quotes = ["I'm going to make him an offer he can't refuse.", "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.", "Toto, I've got a feeling we're not in Kansas anymore.", "May the Force be with you.", "The stuff that dreams are made of.", "I'm as mad as hell, and I'm not going to take this anymore!", "I am big! It's the pictures that got small.", "You can't handle the truth!", "After all, tomorrow is another day!", "Today, I consider myself the luckiest man on the face of the earth.", "Mama always said life was like a box of chocolates. You never know what you're gonna get.", "Shane. Shane. Come back!" , "Well, nobody's perfect.", "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?" , "Gentlemen, you can't fight in here! This is the War Room!" ,"Wait a minute, wait a minute. You ain't heard nothin' yet!", "I'm king of the world!" ];
const quotesHolders = ["The Godfather, 1972", "On the Waterfront, 1954", "The Wizard of Oz, 1939", "Star Wars, 1977", "The Maltese Falcon, 1941", "Network, 1976", "Sunset Blvd., 1950", "A Few Good Men, 1992", "Gone With the Wind, 1939", "The Pride of the Yankees, 1942", "Forrest Gump, 1994", "Shane, 1953", " Some Like It Hot, 1959", "Dirty Harry, 1971", "Dr. Strangelove, 1964 ", "The Jazz Singer, 1927", "Titanic, 1997"]


function generateQuotes() {
    var randomNumber = Math.floor(Math.random() * 17)  
    quote.innerHTML = '" '+ quotes[randomNumber] + ' "';
    quoteHolder.innerHTML = quotesHolders[randomNumber];
}
generateButton.addEventListener('click', generateQuotes);