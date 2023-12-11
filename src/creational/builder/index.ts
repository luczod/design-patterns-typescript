import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

/* const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);

const mealBox = new MealBox();
mealBox.add(rice, beans, meat);
mealBox.show();
console.log(mealBox);
console.log(mealBox.getPrice()); */

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganMeal = new VeganDishBuilder();
const dishVegan = veganMeal.makeMeal().getMeal();
console.log(dishVegan);
console.log(dishVegan.getPrice());
