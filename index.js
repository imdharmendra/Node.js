// global
global.myVar = "hello ducat";
console.log(global.myVar);
// __dirname
console.log(__dirname);
// __filename
console.log(__filename);
// process
console.log(process.version);
console.log(process.platform);
// setTimeout clearTimeout
const timer = setTimeout(() => {
  console.log("Hello setTimeout");
}, 2000);
clearTimeout(timer);
// setInterval clearInterval
const interval = setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);
setTimeout(() => clearInterval(interval), 5000);
// setImmediate clearImmediate
const immediate = setImmediate(() => {
  console.log("Executed immediately after the current event loop");
});
clearImmediate(immediate);
// require
const fs = require("fs");
fs.writeFileSync("example.txt", "Hello Node.js");
// module
console.log(module.exports);
// exports
exports.greet = () => {
  console.log("Hello from exports");
};
// buffer
const buffer = Buffer.from("Hello Buffer");
console.log(buffer.toString());
// URL
const myURl = new URL("https://www.google.com");
console.log(myURl.searchParams.get("name"));
// TextDecoder and TextEncoder
const encoder = new TextEncoder();
const encoded = encoder.encode("Hello TextEncoder");
const decoder = new TextDecoder();
console.log(decoder.decode(encoded));
