import { ITaxVisitor } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: ITaxVisitor): number {
    return visitor.calcTaxesForCigarette(this);
  }
}
