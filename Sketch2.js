//Place other sketch here
let closed = false;
let text1;
let newX;
let newY;
let main;

function setup() {
  createCanvas(1580, 1080);
  textAlign(CENTER, CENTER);
  textSize(144);
  main =	createA('Main_index.html', 'Back to Main');
	main.position(1280,10);
}

function draw() {
  newY = random(1,5);
  newX = random(1,5);

  if (closed) {
    background(155);
    text("🙉", width / 2 + random(-500,1000), height / 2 + random(-500, 1000));
  } else {
    background(64);
    text("🙈", width / 2, height / 2,);

  }
}



function mousePressed() {
  closed = !closed;
}
