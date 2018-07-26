/**
 * Exercise Gen01 - Write a CountDown Iterator using non generator function
 */

let countDown = function () {
    let count = 0;

    return {
        next: function() {
            return {value: count++};
        }
    }
};

let getCount = countDown();

console.log(getCount.next());
console.log(getCount.next());
console.log(getCount.next());
console.log(getCount.next());

//#TM: Looks good