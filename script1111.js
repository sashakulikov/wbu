let textContent =
  "I could tell them about something, but they’d just respond with, “Oh, okay, cool.” Sorry if my answers sound sad — it’s just how it is.";
let currentLetter = 0;
let typingSpeed = 2; // Control how fast the letters appear (higher = slower)

let video;
let img;
let bgGraphics;
let angleY = 0;
let angleX = 0;
let angleYOffset = 0;
let angleXOffset = 0;
let angleSpeed = 0.01;

let lineHeight = 1.1; // Control the line height (spacing between lines)

let fontSize = 70; // Default font size, it will be recalculated based on canvas width

function preload() {
  font = loadFont("TimesNRCondensed.otf");
  img = loadImage("pan5.svg"); // Load your panorama image
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  bgGraphics = createGraphics(windowWidth, windowHeight, WEBGL); // Separate 3D canvas for the panorama

  textAlign(CENTER, CENTER); // Align text to the center
  textFont(font);
  frameRate(30);

  // Calculate the initial text size based on canvas width
  adjustTextSize();
}

function draw() {
  background(29, 29, 29); // Set the background color
  // Update angles for automatic panorama movement
  angleYOffset += angleSpeed;
  angleXOffset += angleSpeed / 2;

  angleY = sin(angleYOffset) * 0.3;
  angleX = cos(angleXOffset) * 0.15;

  // Draw the 360˚ panorama with rotation
  bgGraphics.push();
  bgGraphics.blendMode(EXCLUSION); // Blend mode for the 3D elements
  bgGraphics.background(0, 0, 0); // Transparency
  bgGraphics.rotateY(angleY); // Horizontal rotation
  bgGraphics.rotateX(angleX); // Vertical rotation
  bgGraphics.texture(img); // Apply the panorama texture
  bgGraphics.sphere(800); // Draw the panorama as a sphere
  bgGraphics.pop();

  // Display the 3D panorama behind the video
  blendMode(EXCLUSION); // Apply blend mode for the 3D effect
  image(bgGraphics, 0, 0, width, height);
  blendMode(BLEND); // Reset the blend mode

  noStroke();
  fill(29, 29, 29, 0); // White color with 50% opacity (127 is half of 255)
  rect(0, 0, width, height);

  // Set stroke and fill for the text
  strokeWeight(0.1)
  stroke(0);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  adjustTextSize(); // Recalculate the text size when the window is resized
}

// Function to adjust text size based on canvas width
function adjustTextSize() {
  textSize(fontSize); // Set the text size to the newly calculated value
}
