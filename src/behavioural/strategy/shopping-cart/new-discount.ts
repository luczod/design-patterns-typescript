import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './e-commerce-shopping-cart';

export class NewDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) {
      this.discount = 5;
    }

    console.log('discount:', total * (this.discount / 100));
    console.log('percent:', this.discount / 100);

    return total - total * (this.discount / 100);
  }
}
