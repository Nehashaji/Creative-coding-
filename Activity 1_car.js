function setup() {
  createCanvas(400, 250);
}

function draw() {
  background(220);
  
  // Calculate the x-coordinate to center the car
  let carX = width / 2 - 125; // Half of canvas width minus half of car width
  
  // Draw car body
  fill(128, 0, 128); // Royal purple color
  rect(carX, 100, 200, 50, 10); // Body with rounded corners
  
  // Draw windows
  fill(0, 0, 255); // Royal blue color
  rect(carX + 60, 110, 40, 30, 5); // Left window
  rect(carX + 110, 110, 40, 30, 5); // Right window
  
  // Draw roof
  fill(255, 192, 203); // Pink color
  beginShape();
  vertex(carX + 30, 100);
  vertex(carX + 50, 80); 
  vertex(carX + 170, 80); 
  vertex(carX + 190, 100); 
  endShape(CLOSE);
  
  // Draw headlights
  fill(255, 204, 0); // Gold color
  ellipse(carX + 180, 115, 15, 15);
  
  // Draw wheels
  fill(0); // Black color
  ellipse(carX + 30, 160, 60, 60); // Front wheel
  ellipse(carX + 190, 160, 60, 60); // Back wheel
  
  // Draw wheel rims
  fill(192); // Silver color
  ellipse(carX + 30, 160, 40, 40); // Front wheel rim
  ellipse(carX + 190, 160, 40, 40); // Back wheel rim
  
  // Draw wheel inner rims
  fill(255); // White color
  ellipse(carX + 30, 160, 20, 20); // Front wheel inner rim
  ellipse(carX + 190, 160, 20, 20); // Back wheel inner rim
  
  // Draw side mirrors
  fill(0, 255, 255); // Cyan color
  rect(carX + 30, 95, 5, 5); // Left side mirror
  rect(carX + 185, 95, 5, 5); // Right side mirror
}
