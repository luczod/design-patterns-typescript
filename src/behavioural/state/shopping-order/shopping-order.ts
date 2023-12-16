import { OrderPending } from '../orders/order-pending';
import { IShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: IShoppingOrderState = new OrderPending(this);

  getState(): IShoppingOrderState {
    return this.state;
  }

  setState(state: IShoppingOrderState): void {
    this.state = state;
    console.log(`now the state is ${state.getName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
