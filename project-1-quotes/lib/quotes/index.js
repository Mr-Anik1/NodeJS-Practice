const fs = require("fs");
const quotes = {};

quotes.allQuotes = () => {
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf-8");
  const arrayOfQuotes = fileContents.split(/\n/);
  return arrayOfQuotes;
};
module.exports = quotes;
