import { ITaxVisitor } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class CartVisitor {
  private _products: VisitableProduct[] = [];

  addItem(...items: VisitableProduct[]): void {
    items.forEach((item) => this._products.push(item));
  }

  totaLPrice(): number {
    return this._products.reduce((sum, item) => item.getPrice() + sum, 0);
  }

  totalWithTaxes(visitor: ITaxVisitor): number {
    return this._products.reduce((sum, item) => item.getPriceWithTaxes(visitor) + sum, 0);
  }
}
