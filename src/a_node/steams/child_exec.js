/* import { Duplex } from "node:stream";

const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },

  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },
});

inoutStream.currentCharCode = 65;

process.stdin.pipe(inoutStream).pipe(process.stdout); */

import { promisify } from 'util';
import { exec as childExec } from 'child_process';

const exec = promisify(childExec);

try {
  console.log('> Exec');
  await exec('google-chrome');
} catch (error) {
  throw new Error(error);
}
