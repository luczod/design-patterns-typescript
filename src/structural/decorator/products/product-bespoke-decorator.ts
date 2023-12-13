import { IProduct } from './product-protocol';

export class ProductBespokeDecorator implements IProduct {
  constructor(protected product: IProduct) {}

  getName(): string {
    return this.product.getName() + ' (MEASUREMENTS)';
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
