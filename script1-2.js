let img;
let bgGraphics;
let angleY = 0;
let angleX = 0;
let angleYOffset = 0;
let angleXOffset = 0;
let angleSpeed = 0.01;


function preload() {
  img = loadImage("pan5.svg"); // !!! панораму что нужно менять через firebase
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  bgGraphics = createGraphics(windowWidth, windowHeight, WEBGL); // Separate 3D canvas for the panorama
}

function draw() {
  background(239, 250, 219); // !!! цвет что нужно менять через firebase
  angleYOffset += angleSpeed;
  angleXOffset += angleSpeed / 2;

  angleY = sin(angleYOffset) * 0.3;
  angleX = cos(angleXOffset) * 0.15;

  // Draw the 360˚ panorama with rotation
  bgGraphics.push();
  bgGraphics.blendMode(EXCLUSION); // Blend mode for the 3D elements
  bgGraphics.background(0, 0); // Transparency
  bgGraphics.rotateY(angleY); // Horizontal rotation
  bgGraphics.rotateX(angleX); // Vertical rotation
  bgGraphics.texture(img); // Apply the panorama texture
  bgGraphics.sphere(800); // Draw the panorama as a sphere
  bgGraphics.pop();

  // Display the 3D panorama behind the video
  blendMode(EXCLUSION); // Apply blend mode for the 3D effect
  image(bgGraphics, 0, 0, width, height);
  blendMode(BLEND); // Reset the blend mode
}
