/**
 * Complete the below function that calculates the nth fibonacci 
 * number in the sequence with one destructuring assignment. 
 * Definition of Fibonacci number is the following
 *  function fib( n ) { 
 *      let fibCurrent = 1; 
 *      let fibLast = 0;
 *      if ( n < 0 ) return NaN;
 *       if ( n <= 1 ) return n;
 *       for ( let fibIndex = 1; fibIndex < n; ++fibIndex ) {
 *           // Insert one destructuring expression here
 *       }
 *       return fibCurrent;
 *      }
// 
 */


function fib( n ) { 
    let fibCurrent = 1; 
    let fibLast = 0;
    if ( n < 0 ) return NaN;
    if ( n <= 1 ) return n;
    for ( let fibIndex = 1; fibIndex < n; ++fibIndex ) {
        // Insert one destructuring expression here
        [fibCurrent,fibLast] = [fibCurrent+fibLast, fibCurrent];
        console.log(fibCurrent);
    }
    return fibCurrent;
}


fib(10);