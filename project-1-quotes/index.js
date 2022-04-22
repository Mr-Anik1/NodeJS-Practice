const mathLibrary = require("./lib/math");
const quotesLibrary = require("./lib/quotes/index");

const app = {};

app.showQuotes = () => {
  //Get all quotes
  const allQuotes = quotesLibrary.allQuotes();
  //length of the quotes array
  const numberOfQuotes = allQuotes.length;
  //generate random number
  const randomNumber = mathLibrary.randomNumber(1, numberOfQuotes);
  //show indivisual quotes using random number
  const selectQuotes = allQuotes[randomNumber - 1];
  console.log(`${selectQuotes}
  `);
};

//Infinity loop
setInterval(app.showQuotes, 1000);
