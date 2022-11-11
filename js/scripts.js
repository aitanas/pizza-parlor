// Business Logic

function Pizza (toppings, size) {
this.toppings = toppings;
this.size = size;
}

Pizza.prototype.getCost = function() { 
  let cost = 0;
  switch (this.size) {
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
  this.toppings.forEach(function(topping) {
    if (topping.includes('olives') || topping.includes('onion') || topping.includes('peppers')) {
      toppingsCost += 0.50; }
    if (topping.includes('artichoke') || topping.includes('tomato')) {
      toppingsCost += 1.00; }
  });

  let totalCost = cost += toppingsCost;
  return totalCost;
};

// UI Logic

function handlePizzaOrder(e) {
  e.preventDefault();

  const paragraph = document.createElement("p");
  const h2 = document.createElement("h2");
  const pizzaSize = document.getElementById("pizza-size").value;
  let toppingInput = document.querySelectorAll("input[name=toppings]:checked");
  let toppingArray = Array.from(toppingInput);

  const toppings = [];
  toppingArray.forEach(function(element) {
    toppings.push(element.value);
  });

  let pizzaOrder = new Pizza(toppings, pizzaSize);
  
  h2.append("Order placed!");
  paragraph.append(`Your total is $${pizzaOrder.getCost()}. Thank you!`); // missing decimal point -- branching statement
  document.body.append(h2, paragraph);
  document.getElementById("submit").disabled = true;
}

function clearPizzaOrder (e) {
  e.preventDefault();
  const h2Element = document.querySelector("h2");
  const pElement = document.querySelector("p");

  h2Element.remove();
  pElement.remove();
  document.getElementById("submit").disabled = false;
}

window.addEventListener("load", function () {
  document.querySelector("form#pizza-order").addEventListener("submit", handlePizzaOrder);
  document.querySelector("button#reset").addEventListener("click", clearPizzaOrder);
});