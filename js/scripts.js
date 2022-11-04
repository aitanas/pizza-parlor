function Pizza (toppings, size) {
this.toppings = toppings;
this.size = size;
}

Pizza.prototype.getCost = function(pizza) {
  let cost = 0;
  switch (pizza.size) {
    case 'small':
      cost += 15.00
      break;
    case 'medium':
      cost += 20.00
      break;
    case 'large':
      cost += 25.00
      break;
  } return cost;
};