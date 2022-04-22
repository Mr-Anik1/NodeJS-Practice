// const os = require("os");
// const fs = require("fs");

// fs.readFile("index.text", (err, data) => {
//   console.log(data.toString());
// });
// const DanceProgramme = require("./test");
// const run = new DanceProgramme();

// run.on("event", ({ time, fName }) => {
//   console.log(`Function name is ${fName} & Function will start on ${time} `);
// });

// run.eventFunction();

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello Anik I am running...");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("This is About Page");
//     res.end();
//   } else {
//     res.write("404 Not Found");
//     res.end();
//   }
// });

// server.listen(3000);
// console.log(`Server is Listening on port 3000`);

// const Play = require("./test");
// const run = new Play();

// run.on("event", ({ day, task }) => {
//   console.log(`We will play on day ${day} & task${task}`);
// });
// run.hello();
//
//
//
//
//
//
//

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("This is Root Page");
//     res.end();
//   } else if (req.url === "/help") {
//     res.write("This is help route! How can i help you?");
//     res.end();
//   } else {
//     res.write("404 Not Found");
//     res.end();
//   }
// });
// server.listen(3000);
// console.log("Server is listening on port 3000");
//
//
//
//
//
// const fs = require("fs");
// const readFile = fs.createReadStream(`${__dirname}/dataFile.txt`, "utf-8");

// readFile.on("data", (chank) => {
//   console.log(chank);
// });
// console.log(`Hello Buffar`);
//
//
//
//
//

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write(`<html>
//     <head>
//     <title>Buffer</title>
//     </head>
//     <body>
//     <form method="post" action='/process'>
//     <input name="message"/>
//     </form>
//     </body>
//     </html>`);
//     res.end();
//   } else if (req.url === "/process" && req.method === "POST") {
//     req.on("data", (chunk) => {
//       console.log(chunk);
//     });
//     res.write(`Thank for submitting`);
//     res.end();
//   }
// });

// server.listen(3000);
// console.log(`Server is listening on port 3000`);
