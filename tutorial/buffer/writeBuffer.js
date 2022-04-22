const fs = require("fs");

const readFile = fs.createReadStream(`${__dirname}/dataFile.txt`, "utf-8");
const writeFile = fs.createWriteStream(
  `${__dirname}/newWriteData.txt`,
  "utf-8"
);
const anotherWrite = fs.createWriteStream(
  `${__dirname}/pipeWrite.txt`,
  "utf-8"
);

/**
 * write file
 */
readFile.on("data", (chunk) => {
  writeFile.write(chunk);
});

/**
 * pipe এর মাধ্যমে write file এর কাজটা করব
 */
readFile.pipe(anotherWrite);
