let ball;
let paddle;
let bricks = [];
let brickRows = 5;
let brickCols = 10;
let brickWidth;
let brickHeight;
let gameState = 'title'; // Possible states: 'title', 'playing', 'win', 'lose'
let score = 0;
let lives = 3;
let particles = [];

function setup() {
  createCanvas(800, 600);
  
  // Calculating the width and height of each brick based on the canvas size
  brickWidth = width / brickCols;
  brickHeight = 30;
  
  // Initialize the paddle and ball
  paddle = new Paddle();
  ball = new Ball();
  
  // Create the grid of bricks
  for (let i = 0; i < brickRows; i++) {
    for (let j = 0; j < brickCols; j++) {
      let x = j * brickWidth;
      let y = i * brickHeight + 50; // Offset bricks from the top
      bricks.push(new Brick(x, y));
    }
  }
}

function draw() {
  // Clear the canvas with a black background
  background(0);
  
  // Checking the current game state and call the corresponding function
  if (gameState === 'title') {
    drawTitleScreen();
  } else if (gameState === 'playing') {
    playGame();
  } else if (gameState === 'win') {
    drawWinScreen();
  } else if (gameState === 'lose') {
    drawLoseScreen();
  }
}

// Function to draw the title screen
function drawTitleScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("Breakout Game", width / 2, height / 3); // Title
  textSize(24);
  text("Press ENTER to Start", width / 2, height / 2); // Instruction to start
  textSize(18);
  text("Use LEFT and RIGHT arrows to move the paddle", width / 2, height * 2 / 3); // Game control instructions
}

// Function to handle the gameplay logic
function playGame() {
  // Draw and update each brick, check for collision with the ball
  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].show();
    if (ball.checkBrickCollision(bricks[i])) {
      bricks.splice(i, 1); // Removing the brick if collided
      score += 10; // Increase score
      createExplosion(bricks[i].x, bricks[i].y); // Creating particle explosion
      if (bricks.length === 0) {
        gameState = 'win'; // All bricks destroyed, player wins
      }
    }
  }
  
  // Draw and update the paddle
  paddle.show();
  paddle.move();
  
  // Draw and update the ball
  ball.update();
  ball.show();
  
  // Draw and update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1); // Remove finished particles
    }
  }
  
  // Display the current score and remaining lives
  fill(255);
  textSize(18);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  text("Lives: " + lives, 10, 30);
  displayLives(); // Show lives as icons
  
  // Check if the ball goes below the paddle
  if (ball.y > height) {
    lives--;
    if (lives === 0) {
      gameState = 'lose'; // No more lives, player loses
    } else {
      resetBall(); // Reset ball for the next life
    }
  }
}

// Function to draw the win screen
function drawWinScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("You Win!", width / 2, height / 3); // Win message
  textSize(24);
  text("Press ENTER to Restart", width / 2, height / 2); // Instruction to restart
}

// Function to draw the lose screen
function drawLoseScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("Game Over", width / 2, height / 3); // Game over message
  textSize(24);
  text("Press ENTER to Restart", width / 2, height / 2); // Instruction to restart
}

// Function to handle key presses
function keyPressed() {
  if (keyCode === ENTER) {
    if (gameState === 'title' || gameState === 'win' || gameState === 'lose') {
      resetGame(); // Start a new game if ENTER is pressed on the title, win, or lose screens
    }
  }
}

// Function to reset the game state
function resetGame() {
  score = 0;
  lives = 3;
  gameState = 'playing'; // Set game state to playing
  bricks = [];
  for (let i = 0; i < brickRows; i++) {
    for (let j = 0; j < brickCols; j++) {
      let x = j * brickWidth;
      let y = i * brickHeight + 50;
      bricks.push(new Brick(x, y)); // Recreate the bricks
    }
  }
  resetBall(); // Reset the ball position and speed
}

// Function to reset the ball to its initial state
function resetBall() {
  ball = new Ball(); // Create a new ball object
}

// Function to display lives as small circles
function displayLives() {
  for (let i = 0; i < lives; i++) {
    fill(255);
    ellipse(720 + i * 20, 20, 10, 10); // Draw a small circle for each remaining life
  }
}

// Function to create an explosion effect with particles
function createExplosion(x, y) {
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle(x, y)); // Create multiple particles at the given position
  }
}

// Class to represent the paddle
class Paddle {
  constructor() {
    this.w = 120; // Width of the paddle
    this.h = 20; // Height of the paddle
    this.x = width / 2 - this.w / 2; // Initial horizontal position
    this.y = height - 50; // Initial vertical position
    this.speed = 10; // Speed of the paddle movement
  }
  
  show() {
    fill(50, 150, 250); // Paddle color
    rect(this.x, this.y, this.w, this.h, 20); // Draw the paddle with rounded corners
  }
  
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x = constrain(this.x - this.speed, 0, width - this.w); // Move left and constrain within canvas
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x = constrain(this.x + this.speed, 0, width - this.w); // Move right and constrain within canvas
    }
  }
}

// Class to represent the ball
class Ball {
  constructor() {
    this.size = 20; // Diameter of the ball
    this.x = width / 2; // Initial horizontal position
    this.y = height / 2; // Initial vertical position
    this.speedX = random(-5, 5); // Random initial horizontal speed
    this.speedY = -5; // Initial vertical speed
  }
  
  show() {
    fill(255, 100, 100); // Ball color
    ellipse(this.x, this.y, this.size); // Draw the ball
  }
  
  update() {
    this.x += this.speedX; // Update horizontal position
    this.y += this.speedY; // Update vertical position
    
    // Check for wall collisions
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1; // Reverse horizontal direction if it hits the left or right wall
    }
    if (this.y < 0) {
      this.speedY *= -1; // Reverse vertical direction if it hits the top wall
    }
    
    // Check for paddle collision
    if (this.y + this.size / 2 > paddle.y && this.x > paddle.x && this.x < paddle.x + paddle.w) {
      this.speedY *= -1; // Reverse vertical direction if it hits the paddle
      this.y = paddle.y - this.size / 2; // Prevent the ball from getting stuck in the paddle
    }
  }
  
  // Function to check collision with a brick
  checkBrickCollision(brick) {
    let collided = this.y - this.size / 2 < brick.y + brick.h && this.x > brick.x && this.x < brick.x + brick.w;
    if (collided) {
      this.speedY *= -1; // Reverse vertical direction if it hits a brick
    }
    return collided;
  }
}

// Class to represent a brick
class Brick {
  constructor(x, y) {
    this.x = x; // Horizontal position
    this.y = y; // Vertical position
    this.w = brickWidth; // Width
    this.h = brickHeight; // Height
    this.color = color(random(150, 255), random(50, 200), random(100, 250)); // Random color
  }
  
  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h, 10); // Draw the brick with slightly rounded corners
  }
}

// Class to represent a particle for the explosion effect
class Particle {
  constructor(x, y) {
    this.x = x; // Initial horizontal position
    this.y = y; // Initial vertical position
    this.vx = random(-2, 2); // Random horizontal velocity
    this.vy = random(-2, 2); // Random vertical velocity
    this.alpha = 255; // Initial opacity
  }
  
  update() {
    this.x += this.vx; // Update horizontal position
    this.y += this.vy; // Update vertical position
    this.alpha -= 5; // Decrease opacity
  }
  
  show() {
    fill(255, this.alpha); // Set fill color with current opacity
    noStroke();
    ellipse(this.x, this.y, 8); // Draw the particle as a small circle
  }
  
  finished() {
    return this.alpha < 0; // Check if the particle is completely faded out
  }
}
