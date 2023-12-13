import { IProduct } from './product-protocol';

export class Shirt implements IProduct {
  private name = 'camiseta';
  private price = 49.9;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
