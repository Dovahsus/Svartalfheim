// Coming back to this

// Get the canvas element and its context
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

// Define the initial position and velocity of the ball
let x = 50;
let y = 50;
let vx = 5;
let vy = 2;

// Define the radius and color of the ball
let radius = 25;
let color = 'blue';

// Define a function to draw the ball on the canvas
function drawBall() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a circle with a fill
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, false);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

// Define a function to update the position and velocity of the ball
function updateBall() {
  // Update the position by adding the velocity
  x += vx;
  y += vy;

  // Check for collisions with the canvas edges and bounce back
  if (x + radius > canvas.width || x - radius < 0) {
    vx = -vx;
  }
  if (y + radius > canvas.height || y - radius < 0) {
    vy = -vy;
  }
}

// Define a function to animate the ball
function animateBall() {
  // Draw the ball
  drawBall();

  // Update the ball
  updateBall();

  // Request the next animation frame
  requestAnimationFrame(animateBall);
}

// Start the animation
animateBall();
