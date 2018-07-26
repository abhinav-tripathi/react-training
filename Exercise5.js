/**
 * Create an implementation where we can extract substring from a given string
 * Modify the Program to find the first nth characters
 * Modify the Program to find the first character from a given string
 */

 let getSubStr = str => (start, end) => (end > str.length) ? str.substr(start,str.length) : str.substr(start,end);

 console.log(`First characters from string: ${getSubStr('Hello World!')(0, 5)}`);
 console.log(`Last characters from string: ${getSubStr('Hello World!')(5, 13)}`);