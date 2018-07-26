/**
 * Create 10x10 matrix of null
 */

let createTwoDimArr = (items, fillValue) => Array(items).fill(fillValue).map(()=>Array(items).fill(fillValue));

console.log(createTwoDimArr(10,null));