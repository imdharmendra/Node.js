// const http = require("http");

// const myServer = http.createServer((req, res) => {
//   console.log("hello ducat india");
//   res.end("hello ducat india");
// });

// myServer.listen(8000, () => console.log("Server Start"));

const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1> Hello Dharmendra </h1>");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
