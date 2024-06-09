let font;
let colors = [];

function preload() {
  font = loadFont('ShadowsIntoLight.ttf');
}

function setup() {
  createCanvas(800, 400);
  background(20); // Black background
  
  // Generating random colors for each letter
  for (let i = 0; i < 17; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }
  
  textFont(font);
  textSize(80);
  textAlign(CENTER, CENTER);
  
  let word = "BATH SPA UNIVERSITY";
  let posX = width / 2 - textWidth(word) / 2;
  let posY = height / 2;
  
  // Draw each letter with a random color and outline
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    let offsetX = textWidth(word.substring(0, i));
    let colorIndex = int(random(colors.length));
    let letterColor = colors[colorIndex];
    
    fill(letterColor);
    stroke(255); // White outline
    strokeWeight(5); // Outline thickness
    text(letter, posX + offsetX, posY);
  }
}

function draw() {
  // Add animation or additional design elements here if needed
}
