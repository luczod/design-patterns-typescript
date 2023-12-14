import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Dory', '42', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Marlin', '42', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Nemo', '38', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Gill', '38', 'P. Sherman', 'Melbourne');
deliveryContext(factory, 'Dory', '42', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Marlin', '42', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Nemo', '38', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Gill', '38', 'P. Sherman', 'Melbourne');
deliveryContext(factory, 'Dory', '42', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Marlin', '42', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Nemo', '38', 'P. Sherman', 'Sydney');
deliveryContext(factory, 'Gill', '38', 'P. Sherman', 'Melbourne');

console.log();
console.log(factory.getLocations());
