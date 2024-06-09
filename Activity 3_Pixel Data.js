var img, x, y;

function preload() {
    img = loadImage("sunset.jpg");
}

function setup() {
    createCanvas(540, 350);
    background(0);
    noStroke();
}

function draw() {
    background(0);
    x = mouseX;
    y = mouseY;
    image(img, 0, 0);
    var c = get(x, y);
    fill(c);
    rectMode(CENTER); // Setting the rectangle mode to center
    rect(x, y, 100, 100); //rectangle at the mouse position
}
