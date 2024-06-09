let x = 100;
let y = 100;
let mode = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (mode === 0) {
    // Drawing mode when mouse is pressed
    let a = random(0, 255);
    let b = random(0, 255);
    let c = random(0, 255);
    fill(a, b, c, 50);
    y += 0.2;
    rect(mouseX - y / 2, mouseY - y / 2, y, y);
  } else {
    // Drawing mode when mouse is not pressed
    x += 0.5;
    let a1 = random(0, 255);
    let b1 = random(0, 255);
    let c1 = random(0, 255);
    fill(a1, b1, c1, 50);
    ellipse(mouseX, mouseY, x, x);
  }
}

function mousePressed() {
  // Change drawing mode when mouse is pressed
  mode = 0;
}

function mouseReleased() {
  // Change drawing mode when mouse is released
  mode = 1;
}
