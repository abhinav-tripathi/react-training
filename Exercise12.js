/**
 * Change the below code such that the second argument of printComment has a default value that’s initially 1,
 * and is incremented by 1 after each call.
 * function printComment( comment, line ) { 
 *  console.log( line, comment );
 * }
*/

let printComment = ( comment, i = 1 ) => {
    console.log(`${comment} ${i+1}`);
};

printComment('Incremented value is', );

