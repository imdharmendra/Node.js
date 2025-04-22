const fs = require("fs");

console.log("starting");
fs.writeFile("example.txt", "Hello dharmendra, welcome to node js...", () => {
  console.log("file is created");
  fs.readFile("example.txt", "utf8", (err, data) => {
    console.log(data);
  });
});

fs.appendFile("example.txt", "This is the appended text", (err, data) => {
  console.log(data);
});
console.log("ending");
