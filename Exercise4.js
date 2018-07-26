/**
 * Write a function that prints following message
 * for each name in the array.
 */

const humans = ["Abhinav", "Rohan", "Mohit", "Sanjay"];

let speciesType = type => spec => console.log(`${spec} is of ${type} type.`);
humans.forEach(speciesType('human'));