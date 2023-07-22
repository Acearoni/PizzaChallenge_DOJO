function pizzaOven(crust, sauce, cheese, toppings, ) {
    let pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms","olives","onions"]);
var p3 = pizzaOven("stuffed crust", "alfredo", ["extra cheese","asiago"], ["grilled chicken","spinach","mushrooms"]);
var p4 = pizzaOven("thin crust", "no sauce", ["guda","bleu"],["pepperoni","sausage","hamburger"]);
console.log(p4,p3,p2,p1);
