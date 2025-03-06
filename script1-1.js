// Cities

function CitiesReplicasScreen1() {
  console.log("CitiesReplicasScreen1");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan1-1.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(29, 29, 29); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}



// Friendship

function FriendshipReplicasScreen1() {
  console.log("FriendshipReplicasScreen1");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan2-1.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(29, 29, 29); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}


// Happiness

function HappinessReplicasScreen1() {
  console.log("HappinessReplicasScreen1");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan3-1.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(29, 29, 29); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}


// Healing


function HealingReplicasScreen1() {
  console.log("HealingReplicasScreen1");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan4-1.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(29, 29, 29); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}

// Fear


function FearReplicasScreen1() {
  console.log("FearReplicasScreen1");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan5-1.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(29, 29, 29); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}

// Mistakes


function MistakesReplicasScreen1() {
  console.log("MistakesReplicasScreen1");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan6-1.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(29, 29, 29); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}

// Self Image


function SelfImageReplicasScreen1() {
  console.log("SelfImageReplicasScreen1");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan7-1.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(29, 29, 29); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}


// The Now

function TheNowReplicasScreen1() {
  console.log("TheNowReplicasScreen1");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan8-1.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(29, 29, 29); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}


// Screen 2

// Cities 

function CitiesReplicasScreen2() {
  console.log("CitiesReplicasScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan1-2.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(239, 250, 219); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}


// Friendship

function FriendshipReplicasScreen2() {
  console.log("FriendshipReplicasScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan2-2.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(197, 249, 255); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}


// Happiness

function HappinessReplicasScreen2() {
  console.log("HappinessReplicasScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan3-2.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(200, 255, 218); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}





// Healing 

function HealingReplicasScreen2() {
  console.log("HealingReplicasScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan4-2.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(253, 234, 255); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}


// Fear

function FearReplicasScreen2() {
  console.log("FearReplicasScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan5-2.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(249, 201, 201); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}



// Mistakes

function MistakesReplicasScreen2() {
  console.log("MistakesReplicasScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan6-2.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(252, 255, 197); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}



// Self Image
function SelfImageReplicasScreen2() {
  console.log("SelfImageReplicasScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan7-2.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(204, 217, 255); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}


// The Now
function TheNowReplicasScreen2() {
  console.log("TheNowReplicasScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pan8-2.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(223, 229, 225); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}



// Screensaver 2

function ScreensaverScreen2() {
  console.log("ScreensaverScreen2");

  let img;
  let bgGraphics;
  let angleY = 0;
  let angleX = 0;
  let angleYOffset = 0;
  let angleXOffset = 0;
  let angleSpeed = 0.01;

  return new p5((sketch) => {
    sketch.preload = function() {
      // console.log("p5js preload");
      img = sketch.loadImage("pantryt.svg"); // !!! панораму что нужно менять через firebase
    };

    sketch.setup = function() {
      // console.log("p5js setup");
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.P2D);
      bgGraphics = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL); // Separate 3D canvas for the panorama
    };

    sketch.draw = function() {
      // console.log("p5js draw");
      sketch.background(181, 191, 202); // !!! цвет что нужно менять через firebase
      angleYOffset += angleSpeed;
      angleXOffset += angleSpeed / 2;

      angleY = sketch.sin(angleYOffset) * 0.3;
      angleX = sketch.cos(angleXOffset) * 0.15;

      // Draw the 360˚ panorama with rotation
      bgGraphics.push();
      bgGraphics.blendMode(sketch.EXCLUSION); // Blend mode for the 3D elements
      bgGraphics.background(0, 0); // Transparency
      bgGraphics.rotateY(angleY); // Horizontal rotation
      bgGraphics.rotateX(angleX); // Vertical rotation
      bgGraphics.texture(img); // Apply the panorama texture
      bgGraphics.sphere(800); // Draw the panorama as a sphere
      bgGraphics.pop();

      // Display the 3D panorama behind the video
      sketch.blendMode(sketch.EXCLUSION); // Apply blend mode for the 3D effect
      sketch.image(bgGraphics, 0, 0, sketch.width, sketch.height);
      sketch.blendMode(sketch.BLEND); // Reset the blend mode
    };
  });
}