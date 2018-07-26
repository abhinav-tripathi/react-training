/**
 * Exercise Gen03 - Write a generator which increases the counter indefinitely whenever called
 */

function* countDown() {
    let count = 0;
    while(true) {
        yield count++;
    }
}


let getCount = countDown();

console.log(getCount.next());
console.log(getCount.next());
console.log(getCount.next());
console.log(getCount.next());

//#TM:Looks good