// import { MyDataStructure } from './my-data-structure';
import { MyDataStructure } from './my-data-structure';
import { MyIteratorProtocol } from './my-iterator-protocol';
import { StackArr } from './stack-array';

export class MyDefaultIterator implements MyIteratorProtocol<string> {
  private _index = 0;

  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    this._index = 0;
  }

  next(): IteratorResult<string> {
    const returnValue = this.makeValue(this.dataStructure.items[this._index]);
    returnValue.done = this._index >= this.dataStructure.size();
    this._index++;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
