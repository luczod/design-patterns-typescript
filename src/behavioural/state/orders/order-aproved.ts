import { ShoppingOrder } from '../shopping-order/shopping-order';
import { IShoppingOrderState } from '../shopping-order/shopping-order-state';
import { OrderPending } from './order-pending';
import { OrderRejected } from './order-rejected';

export class OrderApproved implements IShoppingOrderState {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('The order is already in payment approved status.');
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  shipOrder(): void {
    console.log('Sending order to customer...');
  }
}
