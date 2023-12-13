import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

// facade for src/creational/builder/index.ts
export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();
  private veganMeal = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDessert();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal2);
  }

  makeMeal3(): void {
    const dishVegan = this.veganMeal.makeMeal().getMeal();
    console.log(dishVegan);
    console.log(dishVegan.getPrice());
  }
}
