/**
 * Rewrite the sumArgs function of this tutorial in ES2015, 
 * using a rest parameter and arrow functions.
 *  function sumArgs() { var result = 0;
 *       for( var i = 0; i < arguments.length; ++i ) { 
 *          result += arguments[i];
 *       }
 *   return result;
 *   }
 * 
 *   sumArgs(2, 5, 7, 9);
 */

let sumArgs = (...args) => args.reduce((acc, curr) => acc + curr, 0);

console.log(sumArgs(2, 5, 7, 9));