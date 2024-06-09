// variables for microphone, FFT analyzer, number of bars, and bar width
let mic;
let fft;
let numBars = 64;
let barWidth;

function setup() {
 
  createCanvas(600, 400);
  
  // black background
  background(0);
  
  // Initialize microphone and FFT analyzer
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  
  // Calculate bar width based on canvas width and number of bars
  barWidth = width / numBars;
}

function draw() {
  // Set black background
  background(0);
  
  // Analyze audio spectrum
  let spectrum = fft.analyze();
  
  // Loop through each bar in the spectrum
  for (let i = 0; i < numBars; i++) {
    // Calculate bar height based on spectrum values
    let barHeight = map(spectrum[i], 0, 255, 0, height);
    
    // Map hue, saturation, and brightness based on bar height
    let hue = map(i, 0, numBars, 0, 360); // Hue changes with bar index
    let saturation = map(barHeight, 0, height, 0, 100); // Saturation changes with bar height
    let brightness = map(barHeight, 0, height, 50, 100); // Brightness changes with bar height
    
    // Set fill color based on mapped hue, saturation, and brightness
    fill(hue, saturation, brightness);
    
    // Drawing rectangle representing audio spectrum bar
    rect(i * barWidth, height, barWidth, -barHeight);
  }
}
