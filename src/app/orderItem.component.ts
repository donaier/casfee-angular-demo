import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order, OrderItem } from './pizza.model';

@Component({
  selector: 'app-orderItem',
  templateUrl: 'orderItem.component.html'
})

export class OrderItemComponent {
  @Input()
  orderItem: OrderItem = new OrderItem();

  @Output()
  orderAmountChanged = new EventEmitter();

  constructor() { }

  amountChanged() {
    this.orderAmountChanged.emit(this.orderItem.amount)
  }
}
