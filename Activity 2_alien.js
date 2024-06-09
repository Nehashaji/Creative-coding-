function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150); // Gray background
  
  translate(width / 2, height / 2); // Moving the origin to the center of the canvas
  
  // Body
  fill(128, 0, 128); // Purple color
  beginShape();
  for (let i = 0; i < TWO_PI; i += PI / 3) { // Creating vertices for a hexagon
    let x = cos(i) * 100;
    let y = sin(i) * 100;
    vertex(x, y);
  }
  endShape(CLOSE); // Close the shape
  
  // Eye
  fill(255); // White color
  ellipse(0, -20, 60, 30); // Oval-shaped eye
  
  fill(0); // Black color
  ellipse(0, -20, 20, 20); // Pupil
  
  // Mouth
  noFill(); // No fill for mouth
  stroke(0); // Black color
  strokeWeight(3);
  arc(0, 20, 60, 40, 0, PI); // Mouth 
  
  // Antennae
  stroke(0); // Black color
  strokeWeight(3);
  line(-40, -80, -60, -100); // Left antenna
  line(40, -80, 60, -100); // Right antenna
  
  // Antennae ends (small circles) 
  fill(75, 0, 130); // Dark purple color
  ellipse(-60, -100, 10, 10); // Left antenna end
  ellipse(60, -100, 10, 10); // Right antenna end
  
  // Hands
  stroke(0); // Black color
  strokeWeight(4);
  line(-80, 0, -100, 40); // Left hand
  line(80, 0, 100, 40); // Right hand
  
  // Legs 
  stroke(0); // Black color
  strokeWeight(4);
  
  let bottomLeftX = -cos(PI / 3) * 100;
  let bottomLeftY = sin(PI / 3) * 100;
  let bottomRightX = cos(PI / 3) * 100;
  let bottomRightY = sin(PI / 3) * 100;
  
  line(bottomLeftX, bottomLeftY, bottomLeftX - 20, bottomLeftY + 40); // Left leg
  line(bottomRightX, bottomRightY, bottomRightX + 20, bottomRightY + 40); // Right leg
  
  // Dots around the body
  fill(75, 0, 130); // purple color for dots
  noStroke();
  
  let dots = [
    {x: -50, y: -30, size: 10}, 
    {x: 50, y: -50, size: 10},  
    {x: -80, y: 10, size: 10},  
    {x: 80, y: 20, size: 10},   
    {x: -30, y: 80, size: 10},  
    {x: 30, y: 80, size: 10},   
    {x: -20, y: 50, size: 15},  
    {x: 20, y: -70, size: 15},  
    {x: -70, y: -20, size: 15}, 
    {x: 70, y: -30, size: 15}   
  ];
  
  // Drawing dots
  for (let dot of dots) {
    ellipse(dot.x, dot.y, dot.size, dot.size);
  }
}
