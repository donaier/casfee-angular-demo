import { Component } from '@angular/core';
import { Order, Pizza } from './pizza.model';
import { BakeService } from './services/bake.service';

@Component({
  selector: 'order',
  templateUrl: 'order.component.html'
})

export class OrderComponent {
  order: Order = new Order();

  pizzas: Pizza[] = [
    {name: 'Margerita', price: 13},
    {name: 'Salami', price: 15},
    {name: 'Calabrese', price: 16},
    {name: 'Aglio', price: 13},
  ]


  constructor(private bakeService: BakeService) {
    this.order.email = 'mail@abc.de';
    this.order.orderItems = [
      {amount: 0, pizza: {name: 'Margerita', price: 13}},
      {amount: 0, pizza: {name: 'Salami', price: 15}},
      {amount: 0, pizza: {name: 'Calabrese', price: 16}},
      {amount: 0, pizza: {name: 'Aglio', price: 13}}
    ]
  }

  submitOrder() {
    alert('Pizzas wurden bestellt an ' + this.order.email + ' und dat kostet! - ' + this.order.orderTotal + ' Fr.')
    alert('kommt in ' + this.bakeService.calcBakeTime(this.order) + ' minuten');
  }

  orderAmountChanged(newAmount: number) {
    console.log('new amount: ' + newAmount);
  }
}
