import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle';
import { randomNumber } from './utils/random-number';

/* const fusca = new Car('Fusca');
fusca.pickUp('Jonah');
fusca.stop();

const celta = new Car('Celta');
celta.pickUp('mariane');
celta.stop(); */
const carfactory = new CarFactory();
const customersName = ['John', 'Jane', 'jonah', 'mariane'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customersName[randomNumber(customersName.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carfactory.pickUp(name, `Novo carro ${randomNumber(100)}`);
  newCar.stop();
  console.log('---');
}
