import EventEmitter from 'node:events';
import { promisify } from 'util';
import fs from 'fs';

function cb(err, data) {
  if (err) throw err;
  const lines = data.toString().trim().split('\n');
  return lines;
}

class WithLog extends EventEmitter {
  /**
   * @param {Function} taskFunc
   * @returns {void}
   */
  execute(taskFunc) {
    console.log('Before executing');
    this.emit('begin');
    taskFunc();
    this.emit('end');
    console.log('After executing\nit all happens synchronously');
  }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('emited begin, then to execute'));
withLog.on('end', () => console.log('emited end, Done with execute'));

// withLog.execute(() => console.log("*** Executing task ***"));

class WithTime extends EventEmitter {
  async execute(asyncFunc, ...args) {
    const func = promisify(asyncFunc); // remove callback obligation
    this.emit('begin');
    try {
      console.time('execute');
      const data = await func(...args);
      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    } catch (err) {
      this.emit('error', err);
    }
  }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('data', (data) => console.log(`Length: ${data.length}`));
withTime.on('error', (err) => console.log(err));

// withTime.execute(fs.readFileSync, "./numbers.txt");
withTime.execute(fs.readFile, './numbers.txt');
