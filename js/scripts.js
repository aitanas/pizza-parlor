// Business Logic

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
  }

  let toppingsCost = 0;
  if (pizza.toppings.includes('olives') || pizza.toppings.includes('onion') || pizza.toppings.includes('peppers')) {
    toppingsCost += 0.50; }
  if (pizza.toppings.includes('artichoke') || pizza.toppings.includes('tomato')) {
    toppingsCost += 1.00; }
  if (pizza.toppings.includes('ham') || pizza.toppings.includes('chicken')) {
    toppingsCost += 2.00; }

  let totalCost = cost + toppingsCost;
  return totalCost;
};

// UI Logic

function handlePizzaOrder(e) {
  e.preventDefault();
  
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handlePizzaOrder);
});