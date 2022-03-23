function setup() {

  createCanvas(400, 400);

}


let value = 0;

function draw() {
  fill(value);
  rect(100, 100, 80, 80);
}

function draw() {
  fill(value);
  rect(100, 100, 200, 200);

}

function doubleClicked() {
  if (value === 0) {
    value = value + 100;
  } else {
    value = 0
  }


}