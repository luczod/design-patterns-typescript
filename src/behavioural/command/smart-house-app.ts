import { ISmartHouseCommand } from './command';

export class SmartHouseApp {
  private commands: { [k: string]: ISmartHouseCommand } = {};

  addCommand(key: string, command: ISmartHouseCommand): void {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
