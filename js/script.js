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
    citation: "the Deathly Hallows: Part 1"
    // year: "2010"
  }
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length + 1);
  return quotes[randomQuote];
}



/***
 * `printQuote` function
 ***/

function printQuote() {
  var rngQuote = getRandomQuote();
  var html = "";
  html += `<p class = "quote" > ${rngQuote.quote} </p>`;
  html += `<p class = "source" > ${rngQuote.source}`;
  if (rngQuote.citation) {
    html += `<span class = "citation" > ${rngQuote.citation} </span>`;
  }
  if (rngQuote.year) {
    html += `<span class = "year" > ${quotes.year} <span>`;
  }
  html += ` </p>`;
  return document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);