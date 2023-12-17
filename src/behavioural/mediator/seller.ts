import { Mediator } from './mediator';
import { TSellerProduct } from './seller-product';

export class Seller {
  private products: TSellerProduct[] = [];
  private mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((products) => console.log(products.id, products.name, products.price));
  }

  addProduct(...products: TSellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sell(id: string): TSellerProduct | void {
    const productIndex = this.products.findIndex((product) => product.id === id);

    if (productIndex === -1) return;

    const product = this.products.splice(productIndex, 1);
    return product[0];
  }
}
