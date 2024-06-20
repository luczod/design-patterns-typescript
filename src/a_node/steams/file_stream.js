/* import { pipeline, Transform } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const readableStream = createReadStream("./filte.txt"); // It must be a real file
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const newChunk = chunk.toString().concat("approved");
    this.push(newChunk);
    callback();
  },
});
const writableStream = createWriteStream("./users-approved.txt");

pipeline(readableStream, transformStream, writableStream, (error) => {
  if (error) {
    console.error("An error occurred in the pipeline:", error);
  } else {
    console.log("Pipeline completed successfully.");
  }
}); */

import fs from 'node:fs';
import zlib from 'node:zlib';

const file = 'big.txt';

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write('.'))
  .pipe(fs.createWriteStream(file.split('.')[0] + '.gz'))
  .on('finish', () => console.log('success'));
