//Compute the total value of machines in the inventory array 
const inventory = [
    {type:'machine',value:5000},
    {type:'machine',value:650},
    {type:'duck',value:10},
    {type:'furniture',value:1200},
    {type:'machine',value:77}
];

let filterInventory = (invnt,type) => invnt.filter(i => i.type === type);
let inventoryTotal = (acc, curr) => acc + curr.value;

let getTotal = () => filterInventory(inventory, 'machine').reduce(inventoryTotal, 0);
console.log(`\nTotal of inventory value of machine is = ${getTotal()}`); 

//#TM: Why do we need filterInventory method to take array? (Think about this from functional programming paradigm. Also what will happen
//   if your data source is not an array like structure.)