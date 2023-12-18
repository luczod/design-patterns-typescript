import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;
// console.log('STOLED:', a, b);
console.log('run several times and after used the iterator');
/* const [c, d, ...rest] = dataStructure;
console.log(c, d, rest); */

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('Here need reset the iterator');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
