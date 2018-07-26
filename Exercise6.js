/**
 * Create an array that contains the last four characters of another array
 */

const str = 'Abhinav';
const position = 4;

let getLastElement = (args, position) =>  args.filter((i, index) => (index > args.length - (position+1) )) ;

console.log(getLastElement([...str], position));


