/**
 * Exercise Gen04 - Write a generator which increases the counter indefinitely whenever called.
 * It can be reset by the caller when next is called. 
 * (Hint- Pass argument with next() and reset counter in generator)
 */
function* increaseCounter() {
    let count = 0;
    while(true) {
        let reset = yield count++;
        if(reset) {
            count = 0;
        } 
    }
}


let getCount = increaseCounter();

console.log(getCount.next());
console.log(getCount.next());
console.log(getCount.next());
console.log(getCount.next(true));
console.log(getCount.next());

//#TM: Looks good