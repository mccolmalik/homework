const pizzaToppings = ["pepperoni"," Bacon","Spinach"," Chicken"];

function greetCustomer(toppings) {
  let greeting =(`Hello, welcome to pizza palace our toppings are `);
  for (let topping of toppings){
    greeting += ` ${topping}`
  };
  console.log(greeting)
};
greetCustomer(pizzaToppings);

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} pizza with `;
  for (let topping of toppings){
    order += ` ${topping}`
  }
  order += ` coming up`
  console.log(order);
  return [size, crust, toppings]
}
getPizzaOrder(`Large`, `Stuffed crust` ,`pepperoni` ,`bacon`, `spinach`, `Chicken` );

function preparePizza([size, crust, toppings]){
  console.log(`Cooking Pizza`);{
    return [size, crust, toppings]
  }
};
preparePizza(`Large`, `Stuffed Crust`, pizzaToppings)

function servePizza(size, crust, ...toppings){
  console.log("here is your")
  return [size, crust, toppings];
};
servePizza(`Large`, `Stuffed crust` ,`pepperoni` ,`bacon`, `spinach`, `chicken` )

