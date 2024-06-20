import { createSecureServer } from "node:http2";
import { readFileSync } from "node:fs";

const useSSL = !!process.env.SSL;

const server = createSecureServer({
  key: readFileSync("localhost-privkey.pem"),
  cert: readFileSync("localhost-cert.pem"),
});
server.on("error", (err) => console.error(err));

server.on("stream", (stream, _) => {
  // stream is a Duplex
  stream.respond({
    "content-type": "text/html; charset=utf-8",
    ":status": 200,
  });
  stream.end("<h1>Hello World</h1>");
});

console.log("https://localhost:8443/");

server.listen(8443);
