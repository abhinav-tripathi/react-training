/**
 * Exercise Gen05 - Write a CountDown Iterator using generator function, 
 * attach with plain vanilla JavaScript object (Hint - Making object iterable)
 */
function* countDown() {
    let count = 0;
    while(true) {
        yield count++; 
    }
}