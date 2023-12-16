import { ShoppingOrder } from '../shopping-order/shopping-order';
import { IShoppingOrderState } from '../shopping-order/shopping-order-state';
import { OrderApproved } from './order-aproved';
import { OrderRejected } from './order-rejected';

export class OrderPending implements IShoppingOrderState {
  private name = 'OrderPendig';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log('the order has pedent payment');
  }
  shipOrder(): void {
    console.log('I can not send the order pending payment.');
  }
}
