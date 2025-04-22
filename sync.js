const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const data = fs.readFileSync("example.txt", "utf8");
    res.end(data);
  } else if (req.url === "/example") {
    const data = fs.readFileSync("example.txt", "utf8");
    res.end(data);
  }
});

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
