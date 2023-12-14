import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import { TDeliveryLocation, TDeliveryLocationDictionary } from './delivery-types';

export class DeliveryFactory {
  private locations: TDeliveryLocationDictionary = {};

  private createKeyDict(data: TDeliveryLocation): string {
    // replace(/\s+/, '') = remove white space
    return Object.values(data)
      .map((item: string) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(intrinsicState: TDeliveryLocation): DeliveryFlyweight {
    const key = this.createKeyDict(intrinsicState);
    if (key in this.locations) return this.locations[key];

    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): TDeliveryLocationDictionary {
    return this.locations;
  }
}
