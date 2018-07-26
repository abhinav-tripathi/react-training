/**
 * Write a function that executes a callback function after a given delay in milliseconds.
 * The default value of delay is one second.
 */

let delayMethod = (delay = 1000) => setTimeout(() => console.log(`Function executed in ${delay}`),delay);

delayMethod(2000);