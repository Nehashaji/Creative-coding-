let table; 
let languages = []; 
let percentages = []; 
function preload() {
  // Getting data from csv file
  table = loadTable('programming_languages.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800); //  a square canvas for the pie chart
  background(20); // Dark background 

  // Getting data from the CSV file
  for (let i = 0; i < table.getRowCount(); i++) {
    languages.push(table.getString(i, 'Language')); // Store language names
    percentages.push(table.getNum(i, 'Percentage')); // Store usage percentages
  }

  // Draw the title text
  fill(255); // White color for the title
  textSize(32); // Size of the title text
  textAlign(CENTER, CENTER); // Center the title
  text("Top 10 Most Popular Programming Languages in 2023", width / 2, 50); // Display the title
  
  // Drawing the pie chart using the data and labels
  drawPieChart(width / 2, height / 2, min(width, height) * 0.7, percentages, languages);
}

function drawPieChart(cx, cy, diameter, data, labels) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i]; // Calculating the total to normalize percentages
  }
  
  let startAngle = 0; // Initial angle for the first slice
  
  for (let i = 0; i < data.length; i++) {
    let sliceAngle = map(data[i], 0, total, 0, TWO_PI); // Calculate the angle for the slice
    
    // Assigning rainbow colors
    let hue = map(i, 0, data.length, 0, 360); // Rainbow hue range
    let saturation = 100; //  saturation
    let brightness = 100; // brightness
    
    fill(hue, saturation, brightness); // Set the fill color for the slice
    noStroke(); // No border for the slices
    
    // Draw the pie slice
    arc(cx, cy, diameter, diameter, startAngle, startAngle + sliceAngle, PIE);
    
    // Calculate the angle for the label placement
    let midAngle = startAngle + sliceAngle / 2;
    
    // Calculate the position for the label
    let textX = cx + cos(midAngle) * (diameter / 2.5);
    let textY = cy + sin(midAngle) * (diameter / 2.5);
    
    // Draw the label for each slice
    fill(255); // White color for the label
    textSize(16); // Size of the label text
    textAlign(CENTER, CENTER); // Center the label
    text(labels[i], textX, textY); // Display the label
    
    startAngle += sliceAngle; // Move to the next slice angle
  }
}
