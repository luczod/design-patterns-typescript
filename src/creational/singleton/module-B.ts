import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseModule } from './db/my-database-module';
import { myDatabasevar as objModuleA } from './module-A';

// const myDatabasevar = MyDatabaseClassic.instance;
const myDatabasevar = MyDatabaseModule;
myDatabasevar.add({ name: 'The Searchers', age: 67 });
myDatabasevar.show();

console.log(myDatabasevar === objModuleA);
