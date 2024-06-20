import fs from "fs";
import { createServer } from "http";
const server = createServer();

// big.txt 430M
// bigger.txt 1.7G
server.on("request", (_, res) => {
  fs.readFile("./big.txt", (err, data) => {
    if (err) throw err;

    res.end(data);
  });
});

console.log("http://localhost:8005/");

server.listen(8005);
