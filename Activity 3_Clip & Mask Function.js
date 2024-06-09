let img;

function preload(){
  img = loadImage("butterfly.jpg");
}

function setup() {
  createCanvas(700, 500);
  background(190,200,250);
  
  // Image inside shape using clip function
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);
  cnv7.circle(100,100,190);
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0);
  image(cnv7,350,225);
  
  // Image inside shape using mask function
  img.resize(200,200);
  let cnv5 = createGraphics(200,200);
  cnv5.circle(100,100,190);
  cnv5.triangle(0,0,100,200,200,0);
  img.mask(cnv5);
  image(img,300,25);
}
