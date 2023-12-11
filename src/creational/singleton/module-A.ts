import { MyDatabaseClassic } from './db/my-database-classic';

export const myDatabasevar = MyDatabaseClassic.instance;
myDatabasevar.add({ name: 'ford', age: 72 });
myDatabasevar.add({ name: 'Wayne', age: 42 });
myDatabasevar.show();
