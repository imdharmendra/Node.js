const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.end("Error reading file");
      }
      res.end(data);
    });
  }
});

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
