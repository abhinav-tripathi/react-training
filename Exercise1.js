//Create a array which has number greater then 70
const arr = [3,62,234,7,23,74,23,76,92];
let ff = (num,arr1) => arr1.filter(ele => ele > num);
console.log(`Array of number greater than 70 is ${ff(70,arr)}`);