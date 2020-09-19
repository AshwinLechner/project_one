/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// Array of quote objects
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


// Function that gets a random quote object.
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

// functionn that displays the quotes inc source and citatio, year and/or mood if avalible.
function printQuote() {
  var quotes = getRandomQuote();
  var html = "";

  // Code credits go to: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj.
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

// Function that shows a new quote every 5 seconds
function rotateQuotes() {
  nextQuote = setInterval(printQuote, 5000);
}
rotateQuotes();

document.getElementById('load-quote').addEventListener("click", printQuote, false);