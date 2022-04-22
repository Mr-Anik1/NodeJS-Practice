const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is Root Page");
    res.end();
  } else if (req.url === "/help") {
    res.write("This is help route! How can i help you?");
    res.end();
  } else {
    res.write("404 Not Found");
    res.end();
  }
});

server.listen(3000);
console.log("Server is listening on port 3000");
