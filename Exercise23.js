/**
 * Create a function to Extract the value marked
 * in red from the given object
 */

const person = { 
    first: 'Mohan',
    last: 'Singh', 
    address: {
    lines: ['Sector 47', 'Chestor Lane', 'Apt 23' ], 
    city: 'Gurgaon' ,
    state: 'Haryana'
    }
};

let getAddressInfo = ({address: {lines: [,addressLines2,]}}) => addressLines2;

console.log(getAddressInfo(person));