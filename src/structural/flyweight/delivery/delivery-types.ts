import { DeliveryLocation } from './delivery-location';

export type TDeliveryLocation = {
  readonly street: string;
  readonly city: string;
};

export type TDeliveryLocationDictionary = { [k: string]: DeliveryLocation };
