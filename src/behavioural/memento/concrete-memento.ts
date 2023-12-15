import { IMemento } from './memento';

export class ConcreteMemento implements IMemento {
  constructor(
    private name: string,
    private date: Date,
    private fileFormat: string,
    private filePath: string,
  ) {}

  getName(): string {
    return this.name;
  }
  getDate(): Date {
    return this.date;
  }
  getFilePath(): string {
    return this.filePath;
  }
  getFileFormat(): string {
    return this.fileFormat;
  }
}
