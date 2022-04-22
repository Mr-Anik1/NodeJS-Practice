// let names = ["anik", "manik", "tonik"];

// const name1 = "Anik";
// const funk = () => {
//   console.log(name1);
// };

// module.exports = {
//   name1,
//   names,
//   funk,
// };

// const EventEmitter = require("events");

// class DanceProgramme extends EventEmitter {
//   eventFunction() {
//     console.log(`Function is testing`);

//     setTimeout(() => {
//       this.emit("event", {
//         time: "10 AM",
//         fName: "The Dance Academy",
//       });
//     }, 2000);
//   }
// }

// module.exports = DanceProgramme;

// const Emitter = require("events");

// class Play extends Emitter {
//   hello() {
//     console.log("First One");
//     setTimeout(() => {
//       this.emit("event", {
//         day: "10",
//         task: "One",
//       });
//     }, 2000);
//   }
// }

// module.exports = Play;

// const fs = require("fs");
// const readFile = fs.createReadStream(`${__dirname}/testData.txt`, "utf-8");
// const writeFile = fs.createWriteStream(
//   `${__dirname}/newWriteFile.txt`,
//   "utf-8"
// );
// const pipeWrite = fs.createWriteStream(`${__dirname}/pipeFile.txt`, "utf-8");

// readFile.on("data", (chunk) => {
//   writeFile.write(chunk);
// });

// readFile.pipe(pipeWrite);

// const fs = require("fs");
// const readFile = fs.readFileSync(`${__dirname}/testData.txt`);
// console.log(readFile);

// const fs = require("fs");
// const writeFile = fs.writeFileSync(
//   `${__dirname}/testData.txt`,
//   "Hello Write file created"
// );
// //console.log(writeFile);
