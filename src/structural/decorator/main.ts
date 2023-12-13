import { log } from 'console';
import { Shirt } from './products/shirt';
import { ProductPatternDecorator } from './products/product-decorator-stamp';
import { ProductBespokeDecorator } from './products/product-bespoke-decorator';

const shirt = new Shirt();
const shirtPattern = new ProductPatternDecorator(shirt);
const shirtCheck = new ProductPatternDecorator(shirtPattern);
const bespokeShirt = new ProductBespokeDecorator(shirt);

log(shirt.getPrice(), shirt.getName());
log(shirtPattern.getPrice(), shirtPattern.getName());
log(shirtCheck.getPrice(), shirtCheck.getName());
log(bespokeShirt.getName());
