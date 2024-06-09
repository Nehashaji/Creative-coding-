let img;

function setup() {
  createCanvas(700, 700);
  background(15, 15, 80); // Dark blue background
  
  // Show drawings inside of text using clip and erase functions
  
  cnv4 = createGraphics(width, height); // Creating a sub canvas, same size as the main canvas
  ctx2 = cnv4.canvas.getContext("2d");
  cnv4.rect(100, 200, 200, 200); // Draw a rectangle
  ctx2.clip(); // Apply clipping to the context
  cnv4.fill(0, 200, 0); // Fill color for the circle
  cnv4.circle(200, 230, 100); // Draw a circle
  image(cnv4, 0, 0); // Display the sub canvas on the main canvas

  // And now for the text:
  cnv3 = createGraphics(width, height);
  cnv3.fill(255, 200, 0); // Yellow color for the text
  cnv3.rect(100, 200, 200, 200);  // Draw a rectangle
  cnv3.erase(); 
  cnv3.textSize(50);
  cnv3.text('HELLO', 130, 350); // Display text
  image(cnv3, 0, 0); // Display the sub canvas on the main canvas
}
