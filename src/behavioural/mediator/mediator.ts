import { Seller } from './seller';
import { TSellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => this.sellers.push(seller));
  }

  buy(id: string): TSellerProduct | void {
    let product: TSellerProduct | void;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log('Here is ', product.id, product.name, product.price);
        return;
      }
    }

    console.log('No products with id: ', id);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
