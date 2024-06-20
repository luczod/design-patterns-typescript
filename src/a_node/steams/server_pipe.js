// const server = require("http").createServer();
// "type": "module",
import fs from "fs";
import { createServer } from "http";
// import buffer from "buffer";
const server = createServer();

// big.txt 430M
// bigger.txt 1.7G
server.on("request", (_, res) => {
  const src = fs.createReadStream("./big.txt");
  src.pipe(res);
});

console.log("http://localhost:8006/");

// console.log(buffer.constants.MAX_LENGTH);

server.listen(8006);
