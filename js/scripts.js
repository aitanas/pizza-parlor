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

  const paragraph = document.createElement("p");
  const h2 = document.createElement("h2");
  const pizzaSize = document.getElementById("pizza-size").value;
  let toppingInput = document.querySelectorAll("input[name=toppings]:checked"); // NodeList
  let toppingArray = Array.from(toppingInput);
  const toppings = [];

  toppingArray.forEach(function(element) {
    toppings.push(element.value);
  });

  let pizzaOrder = new Pizza(toppings, pizzaSize);
  console.log(pizzaOrder)
  
  h2.append("Order placed!");
  paragraph.append(`Your total is $${pizzaOrder.getCost(pizzaOrder)}0. Thank you!`);
  document.body.append(h2, paragraph);
}

function clearPizzaOrder (e) {
  e.preventDefault();
  const h2Element = document.querySelector("h2");
  const pElement = document.querySelector("p");
  h2Element.remove();
  pElement.remove();
}

window.addEventListener("load", function () {
  document.querySelector("form#pizza-order").addEventListener("submit", handlePizzaOrder);
  document.querySelector("button#reset").addEventListener("click", clearPizzaOrder);
});