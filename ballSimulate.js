'use strict';

/*Exercise 3
*simulate the movement of ball using regular function
*/

// initialise canvas and context
(function(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d'); 
    
    // physical variables
    var g = 0.1; // gravity
    var fac = 0.8; // velocity reduction factor per bounce
    var radius = 20; // ball radius
    var color = "#0000ff"; // ball color
    
    // initialise position and velocity of ball
    var x = 50;
    var y = 50;
    var vx = 2;
    var vy = 0;
    
    // ensure that code does not run before page has loaded
    window.onload = init; 
    
    function init() {
        // set up a timer
        setInterval(update, 1000/60); // 60 frames per second
    };
    
    function update() {
        // update velocity
        vy += g; // gravity
        
        // update position
        x += vx;
        y += vy; 
        
        // handle bouncing
        if (y > canvas.height - radius) {
            y = canvas.height - radius;
            vy *= -fac;
        } 
        
        // wrap around
        if (x > canvas.width + radius) ? x = -radius : '';
        
        // update the ball
        drawBall();
    };
    
    function drawBall() {
        context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
    };
})();



/*Exercise 3 
*simulate the movement of ball using regular function using arrow function
*/

// initialise canvas and context
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d'); 
 
// physical variables
const g = 0.1; // gravity
const fac = 0.8; // velocity reduction factor per bounce
const radius = 20; // ball radius
const color = "#f00"; // ball color
 
// initialise position and velocity of ball
let x = 50;
let y = 50;
let vx = 2;
let vy = 0;
 

let init = () => setInterval(update, 1000/60); // 60 frames per second
 
let update = () => {
  // update velocity
  vy += g; // gravity
 
  // update position
  x += vx;
  y += vy; 
 
  // handle bouncing
  if (y > canvas.height - radius) {
    y = canvas.height - radius;
    vy *= -fac;
  } 
 
  // wrap around
  (x > canvas.width + radius) ? x = -radius : '';
 
  // update the ball
  drawBall();
};
 
let drawBall = () => {
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI, true);
    context.closePath();
    context.fill();
};

// ensure that code does not run before page has loaded
window.onload = init; 