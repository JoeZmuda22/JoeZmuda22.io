//to be saved as a .js file
// CHANGE the digits themselves, the 2d shape-type, the number of those shapes, where/how they relate to everyother
//DO NOT CHANGE the stuff in the setup related to the Canvas
let shoe = 26;
let armRight;
let armLeft;
let antena = 0;
let ball = 0;

function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background('blue');
  fill('white')
  ellipse(100,50,50,30);
  ellipse(150,50,50,30);
  ellipse(420,40,50,30);
  ellipse(480,40,50,30);
  fill('yellow')
  ellipse(720,10,100,100);
  // Neck
  stroke('0')
  line(200,260,260,90);//string1
  line(330,260,260,90);//string 2
  fill(0);
  ellipse(260,60,100,30);
  stroke('red'); // Set stroke to red
  line(250, 257, 246, 162); // Left
  line(260, 257, 256, 162); // Middle
  line(270, 257, 266, 162); // Right
  // Antennae

  line(260, 155, 260, 120);
  fill("red");
  //line(276, 155, 246, 112); // Small

 // Tall
  //line(276, 155, 342, 170); // Medium
  // Body
  stroke('red')
  armLeft = line(220,300,200,260);//left arm
  armRight = line(330,260,300,310);//right arm
  noStroke(); // Disable stroke
  fill(102); // Set fill to gray
  ellipse(240, 377, 20, 20); // Antigravity orb 1
  ellipse(288, 377, 20, 20); // Antigravity orb 2
  fill(0); // Set fill to black
  rect(219, 257, 90, 120); // Main body
  fill(102); // Set fill to gray
  rect(219, 274, 90, 6); // Gray stripe
  fill(0); // Set fill to black
  ellipse(260, 200, 45, 45); // Head
  fill(255); // Set fill to white
  ellipse(260, 200, 14, 14); // Large eye
  fill(0); // Set fill to black
  ball =ellipse(260, 200, 3, 3); // Pupil
  fill('green'); // Set fill to light gray
  ellipse(260, 120, 5, 5); // Small eye 1
  fill('green')
  rect(0,430,780,400); //ground

  //ellipse(296, 130, 4, 4); // Small eye 2
  //ellipse(305, 162, 3, 3); // Small eye 3
}

function mouseClicked() {
  if (ball === 0) {
  ball = ellipse(160, 200, 15, 15);
}
else {
  ball = ellipse(260, 200, 15, 14);
}
}
