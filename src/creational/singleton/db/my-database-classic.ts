import { IUser } from '../interfaces/User';
// break single responsibility principle
// can be remove from book gof design parttern
export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: IUser[] = [];

  private constructor() {}

  // in this case 'static get' you do not need call with ()
  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  add(user: IUser): void {
    this.users.push(user);
  }

  remove(index: number): void {
    // not slice
    // is splice remove ou insert elements in a array
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
