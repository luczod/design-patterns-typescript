import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface ITaxVisitor {
  calcTaxesForFood(obj: Food): number;
  calcTaxesForCigarette(obj: Cigarette): number;
  calcTaxesForAlcoholicDrink(obj: AlcoholicDrink): number;
}
