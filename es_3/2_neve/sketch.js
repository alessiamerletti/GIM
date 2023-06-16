let snowflakes = []; // Array to store snowflake objects
let groundLevel; // Y-coordinate of the ground level

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fill(0, 0, 0);
  groundLevel = windowHeight / 2; // Set the ground level to the middle of the window
}

function draw() {
  let lato = 500;

  if (mouseIsPressed) randomSeed(0);

  background(220); // Set the background to gray (RGB value: 200)

  // Create new snowflakes and add them to the array
  for (let i = 0; i < 8; i++) { // Create 5 snowflakes in each frame
    if (random() < 0.05) {
      let x = random(-lato, lato);
      let y = -lato; // Start the snowflake above the canvas
      let z = random(-lato, lato);
      let rotationSpeed = random(-0.05, 0.05); // Random rotation speed
      let snowflake = { x, y, z, rotationSpeed }; // Create snowflake object
      snowflakes.push(snowflake);
    }
  }
  
  // Move and display each snowflake
  stroke(255); // Set stroke color to white
  noFill();
  beginShape(POINTS);
  for (let i = 0; i < snowflakes.length; i++) {
    let snowflake = snowflakes[i];
    snowflake.y += 1; // Increase the y-coordinate to move the snowflake downwards
    snowflake.x += sin(snowflake.rotationSpeed) * 0.5; // Update x-coordinate with rotation
    snowflake.z += cos(snowflake.rotationSpeed) * 0.5; // Update z-coordinate with rotation
    vertex(snowflake.x, snowflake.y, snowflake.z);
    
    // Check if the snowflake has reached the ground level
    if (snowflake.y >= groundLevel) {
      snowflake.y = groundLevel; // Set the y-coordinate to the ground level
    }
    
    // Remove snowflakes that have settled on the ground
    if (snowflake.y === groundLevel && snowflake.z <= 0) {
      snowflakes.splice(i, 1);
      i--;
    }
  }
  endShape();
}
