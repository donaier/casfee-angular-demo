export class Pizza {
name: string = '';
  price: number = 0;
}

export class OrderItem {
  amount: number = 0;
  pizza: Pizza = new Pizza();
}

export class Order {
  email: string = '';
  orderItems: OrderItem[] = [];

  get orderTotal(): number {
    let total = 0;
    this.orderItems.forEach(item => {total += item.amount * item.pizza.price});

    return total;
  }
}
