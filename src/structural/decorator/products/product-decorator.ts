import { IProduct } from './product-protocol';

export class ProductDecorator implements IProduct {
  constructor(protected product: IProduct) {}

  getName(): string {
    return this.product.getName() + ' (STRIPE)';
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
