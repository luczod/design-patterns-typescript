// better option
import { IUser } from '../interfaces/User';

const users: IUser[] = [];

export const MyDatabaseModule = {
  add(user: IUser): void {
    users.push(user);
  },
  remove(index: number): void {
    // not slice
    // is splice remove ou insert elements in a array
    users.splice(index, 1);
  },
  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
