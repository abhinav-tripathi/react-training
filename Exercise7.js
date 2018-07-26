/**
 * Write a function 
 * that list only those records which are human
 */

const species = [
    { name: "Mohan", type: "human" },
    { name: "Sanjay", type: "human" },
    { name: "OG", type: "alien" } 
];

let getSpeciesType = (arr) => (type) => arr.filter(i => i.type === type);

console.log(getSpeciesType(species)('human'));



