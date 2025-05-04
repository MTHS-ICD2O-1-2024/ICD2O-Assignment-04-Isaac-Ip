// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function selects a random number depending on the user's choice.
 */
function calculatePizzaCost() {
  // input
  const sizeOfPizza = document.getElementById('large-pizza').checked
  const numberOfToppings = document.getElementById('toppings').value
  const tax = 1.13

  // process
  if (sizeOfPizza == true) {
    if (numberOfToppings == "1") {
      const costOfPizza = (6 + 1) * tax
      document.getElementById('result').innerHTML = "<p>The total cost of the pizza is: $" + costOfPizza.toFixed(2) + ". </p>"
    } else if (numberOfToppings == "2") {
      const costOfPizza = (6 + 1.75) * tax
      document.getElementById('result').innerHTML = "<p>The total cost of the pizza is: $" + costOfPizza.toFixed(2) + ". </p>"
    } else if (numberOfToppings == "3") {
      const costOfPizza = (6 + 2.5) * tax
      document.getElementById('result').innerHTML = "<p>The total cost of the pizza is: $" + costOfPizza.toFixed(2) + ". </p>"
    } else {
      const costOfPizza = (6 + 3.35) * tax
      document.getElementById('result').innerHTML = "<p>The total cost of the pizza is: $" + costOfPizza.toFixed(2) + ". </p>"
    }
  } else {
    if (numberOfToppings == "1") {
      const costOfPizza = (10 + 1) * tax
      document.getElementById('result').innerHTML = "<p>The total cost of the pizza is: $" + costOfPizza.toFixed(2) + ". </p>"
    } else if (numberOfToppings == "2") {
      const costOfPizza = (10 + 1.75) * tax
      document.getElementById('result').innerHTML = "<p>The total cost of the pizza is: $" + costOfPizza.toFixed(2) + ". </p>"
    } else if (numberOfToppings == "3") {
      const costOfPizza = (10 + 2.5) * tax
      document.getElementById('result').innerHTML = "<p>The total cost of the pizza is: $" + costOfPizza.toFixed(2) + ". </p>"
    } else {
      const costOfPizza = (10 + 3.35) * tax
      document.getElementById('result').innerHTML = "<p>The total cost of the pizza is: $" + costOfPizza.toFixed(2) + ". </p>"
    }
  }
}

