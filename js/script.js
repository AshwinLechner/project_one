/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
quotes = [{
    quote: "Numbing the pain for a while will make it worse when you finally feel it.",
    source: "Albus Dumbledore",
    citation: "The Goblet of Fire "
  },
  {
    quote: "It is the unknown we fear when we look upon death and darkness, nothing more.",
    source: "Albus Dumbledore",
    citation: "The Half-Blood Prince"
  },
  {
    quote: "I'll just go down and have some pudding and wait for it all to turn up ... It always does in the end.",
    source: "Luna Lovegood",
    citation: "The Order of the Phoenix"
  },
  {
    quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    source: "Sirius Black",
    citation: "The Goblet of Fire"
  },
  {
    quote: "Time will not slow down when something unpleasant lies ahead.",
    source: " Harry Potter",
    citation: "The Goblet of Fire"
  },
  {
    quote: "Always",
    source: "Severus Snape",
    citation: "the Deathly Hallows: Part 1",
    year: 2010,
    mood: ". Hardest part in the movie"
  }
];



function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}


function printQuote() {
  var quotes = getRandomQuote();
  var html = "";

  // Code credits go to: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  html += `<p class = "quote" > ${quotes.quote} </p>`;
  html += `<p class = "source" > ${quotes.source}`;
  if (quotes.citation) {
    html += `<span class = "citation" > ${quotes.citation} </span>`;
  }
  if (quotes.year) {
    html += `<span class = "year" > ${quotes.year} <span>`;
  }
  if (quotes.mood) {
    html += `<span class = "sad" > ${quotes.mood} <span>`;
  }
  html += ` </p>`;
  return document.getElementById('quote-box').innerHTML = html, document.querySelector("body").style.backgroundColor = randomColor;
}

function myFunction() {
  myVar = setInterval(printQuote, 3000);
}

myFunction();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);