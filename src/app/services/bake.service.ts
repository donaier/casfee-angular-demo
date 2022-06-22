import { Injectable } from '@angular/core';
import { Order } from '../pizza.model';

@Injectable({providedIn: 'root'})

export class BakeService {
  constructor() { }

  calcBakeTime(order: Order) {
    let bakeTime = 0;

    order.orderItems.forEach(item => {
      bakeTime += item.amount * 5
    });

    return bakeTime;
  }
}
