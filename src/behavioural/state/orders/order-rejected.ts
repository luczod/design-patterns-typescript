import { ShoppingOrder } from '../shopping-order/shopping-order';
import { IShoppingOrderState } from '../shopping-order/shopping-order-state';

export class OrderRejected implements IShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('I cannot approve the payment because the order was declined.');
  }

  rejectPayment(): void {
    console.log('I cannot refuse payment because the order has already been declined.');
  }

  waitPayment(): void {
    console.log('I cannot move it to pending because the request was declined.');
  }

  shipOrder(): void {
    console.log('I cannot send an order with payment declined.');
  }
}
