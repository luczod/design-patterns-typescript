import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { CartVisitor } from './cart-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { UKTaxVisitor } from './uk-tax-visitor';

const food = new Food(15);
const cigarette = new Cigarette(25);
const alcoholicDrink = new AlcoholicDrink(25);

const brazilTaxVisitor = new BrazilTaxVisitor();
const ukTaxVisitor = new UKTaxVisitor();

const cart = new CartVisitor();
cart.addItem(food, cigarette, alcoholicDrink);

console.log(cart.totaLPrice());
console.log(cart.totalWithTaxes(brazilTaxVisitor));
console.log(cart.totalWithTaxes(ukTaxVisitor));
