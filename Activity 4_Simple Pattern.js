function setup() {
  createCanvas(600, 600);
  background(20); // Dark background t
  
  // Define the number of rows and columns
  let rows = 10;
  let cols = 10;
  
  // Calculate the size of each cell in the grid
  let cellWidth = width / cols;
  let cellHeight = height / rows;
  
  // Loop through each cell in the grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      
      // Calculate the center position for each circle
      let x = i * cellWidth + cellWidth / 2;
      let y = j * cellHeight + cellHeight / 2;
      
      // Randomize the size of each circle
      let circleSize = random(20, cellWidth * 0.9);
      
      // Generate bold, vibrant colors (avoiding green)
      let r = random(150, 255);  // Reds and Pinks
      let g = 0;                 
      let b = random(150, 255);  // Blues and Purples
      
      // Draw the main circle with a bold color
      fill(r, g, b); // Opaque color without transparency
      noStroke();
      ellipse(x, y, circleSize, circleSize);
      
      // Optional: Draw a smaller inner circle with a contrasting bold color
      let innerCircleSize = circleSize * 0.5;
      fill(255 - r, 0, 255 - b); // Contrasting color
      ellipse(x, y, innerCircleSize, innerCircleSize);
    }
  }
}

function draw() {
  // No need to loop, the pattern is drawn once in setup()
}
