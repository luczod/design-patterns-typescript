import { ProductDecorator } from './product-decorator';

export class ProductPatternDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}
