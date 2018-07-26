/**
 * Write a function that calculates the prices after tax calculation
 * for each price element in the prices array
 */

const prices = [1.1, 2.32, 3.68, 4.9];
const taxRate = 0.07;

let calculateTax = (taxRate) => (element) => console.log(element + (element*taxRate));

prices.forEach(calculateTax(taxRate));