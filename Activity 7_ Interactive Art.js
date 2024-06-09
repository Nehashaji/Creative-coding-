let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(52, 8, 19); // Set the background color to a reddish-brown
}

function draw() {
  background(bgColor); // Apply the background color
  noStroke();
  
  // Loop to create a grid of circles across the canvas
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      // Calculate the distance from the mouse to the current circle
      let distance = dist(mouseX, mouseY, x, y);
      // Map the distance to determine the circle's diameter
      let diameter = map(distance, 0, max(width, height), 10, 50);
      
      // Calculate color based on circle's position for a gradient effect
      let r = map(x, 0, width, 255, 200); // Red channel
      let g = map(y, 0, height, 100, 0);  // Green channel
      let b = map(y, 0, height, 0, 100);  // Blue channel
      fill(r, g, b);
      
      // Draw the circle with the calculated diameter
      circle(x, y, diameter);
    }
  }
  
  // Add the welcome text with a bold, italic style
  fill(255); // Set text color to white
  textSize(70); // Set text size
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  stroke(0); // Adding a black outline to the text
  strokeWeight(7); // the thickness of the outline
  
  // Displaying the welcome message 
  text("Welcome to", width / 2, height / 2 - 50); // First line
  text("Bath Spa University", width / 2, height / 2 + 50); // Second line
}
