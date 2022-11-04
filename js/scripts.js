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

  const pizzaSize = document.getElementById("pizza-size").value;
  let toppingSelections = document.querySelectorAll("input[name=toppings]:checked");

  function makeCleanArray(array) {
    let newString = array.join(" ");
    newString.replace

  }

  let toppings = toppingSelection.forEach(element function() {
    element.
  }) 

  let pizzaOrder = new Pizza([toppingSelections], pizzaSize);
  console.log(pizzaOrder)
}

window.addEventListener("load", function () {
  document.querySelector("form#pizza-order").addEventListener("submit", handlePizzaOrder);
});