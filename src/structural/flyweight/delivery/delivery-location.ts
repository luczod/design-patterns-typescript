import { DeliveryFlyweight } from './delivery-flyweight';
import { TDeliveryLocation } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: TDeliveryLocation) {}

  deliver(name: string, number: string): void {
    console.log('Delivery to %s', name);
    console.log('In', this.intrinsicState.city, this.intrinsicState.street);
    console.log('Number:', number);
  }
}
