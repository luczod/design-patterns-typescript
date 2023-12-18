import { ITaxVisitor } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price);
  }

  getPriceWithTaxes(visitor: ITaxVisitor): number {
    return visitor.calcTaxesForAlcoholicDrink(this);
  }
}
