const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<html>
        <head>
        <title>Buffer</title>
        </head>
        <body>
        <form method="post" action='/process'>
        <input name="message"/>
        </form>
        </body>
        </html>`);
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      console.log(`Stream finished`);
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
    });

    res.write(`Thanks for submitting`);
    res.end();
  }
});

server.listen(3000);
console.log(`Server is listening on port 3000`);
