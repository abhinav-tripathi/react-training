/**
 * Define a function that creates HTML lists
 * – Creates a string containing HTML for a list
 * – Only formal argument for a function is a string that is “u” for unordered list and “o” for ordered list
 */

let createDOMList = (listType) => (listType === 'u' || listType === 'o') ? `<${listType}l> <li>Data 1</li> <li>Data 2</li> <li>Data 3</li></${listType}l>` : '';

console.log(createDOMList('u'));