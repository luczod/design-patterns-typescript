import { MyDefaultIterator } from './my-default-iterator';
import { MyIteratorProtocol } from './my-iterator-protocol';

export class StackArr<T> {
  public items: T[] = [];

  private iterator: MyIteratorProtocol<T> = new MyDefaultIterator<T>(this);

  changeIterator(iterator: MyIteratorProtocol<T>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<T> {
    return this.iterator;
  }

  push(...elements: T[]): void {
    elements.forEach((element) => this.items.push(element));
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  pop(): T {
    return this.items.pop();
  }

  isEmpty(): boolean {
    console.log(this.items.length === 0);
    return this.items.length === 0;
  }

  size(): number {
    console.log(this.items.length);
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}
