const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(
    `${__dirname}/buffer/dataFile.txt`,
    "utf-8"
  );
  myReadStream.pipe(res);
  /**
   * pipe() এর মধ্যে writeable stream pass করতে হয় ।
   * এইখানে res হলো writeable stream
   *
   * আর req হলো readable stream
   */
});

server.listen(3000);
console.log(`Server is listening on port 3000`);
