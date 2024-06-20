import { Readable, Transform, Writable, pipeline } from 'node:stream';
import fs from 'fs';

/* HTTP request and response are also streams in NodeJS!
Each of them can have different types of stream depending on whether it is the client or server side.
Therefore, if it is a client, the request it makes to the server is a writable stream and the response it receives is readable.
However, on the server side, the request it receives from the client is readable and the response it sends is writeable.*/

// Read/create
const readable = new Readable({
  read() {
    this.push('User 3');
    this.push('\rUser 2');
    this.push('\rUser 1');
    this.push(null);
  },
});

// transform
const transform = new Transform({
  transform(chunk, enconding, callback) {
    // chunk , each piece of stream
    const user = chunk.toString().concat('approved');
    // aqui pode ser assim:
    this.push(user);
    callback();

    // ou assim:
    // callback(null, user)
  },
});

// write/output
const writable = new Writable({
  write(chunk, enconding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

// readable.pipe(transform).pipe(writable);
// readable.pipe(transform).pipe(fs.createWriteStream("./small.txt"));
pipeline(readable, transform, fs.createWriteStream('./small.txt'), (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Pipeline completed successfully.');
  }
});
