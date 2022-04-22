const fs = require("fs");

// const readFile = fs.createReadStream(`${__dirname}/dataFile.txt`, "utf-8");
const readFile = fs.createReadStream(`${__dirname}/dataFile.txt`);
/**
 * ${__dirname} দ্বারা আমরা buffer Directory এর path টা পাব
 * এরকম[ C:\Users\Anik\Desktop\Programming\Js\node-practice\tutorial\buffer
] 
 * এই path এর পর /dataFile.txt দিলে আমরা dataFile.txt এর Access পাব
 */
readFile.on("data", (chunk) => {
  console.log(chunk);
  console.log(` `);
  console.log(chunk.toString());
});
