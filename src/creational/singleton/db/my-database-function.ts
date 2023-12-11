import { IUser } from '../interfaces/User';

// IIFE (Immediately Invoked Function Expression)
export const MyDatabaseFunction = (function () {
  const users: IUser[] = [];
  // retorn a obj
  return {
    add(user: IUser): void {
      users.push(user);
    },

    remove(index: number): void {
      users.splice(index, 1);
    },

    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();
