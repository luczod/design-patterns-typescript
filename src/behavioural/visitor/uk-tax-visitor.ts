import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { ITaxVisitor } from './tax-visitor-protocol';

export class UKTaxVisitor implements ITaxVisitor {
  calcTaxesForFood(obj: Food): number {
    return obj.getPrice() + obj.getPrice() * 0.05;
  }

  calcTaxesForCigarette(obj: Cigarette): number {
    return obj.getPrice() + obj.getPrice() * 1.5;
  }

  calcTaxesForAlcoholicDrink(obj: AlcoholicDrink): number {
    return obj.getPrice() + obj.getPrice() * 0.5;
  }
}
