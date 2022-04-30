let squareX = [];
let squareY = [];
let backbtn;

function setup() {
	createCanvas(1900, 1800);
	backbtn =	createA('Main_index.html', 'Press me to go back');
	backbtn.position(400,10);
}

function Back() {

}

function draw() {
	background(152);
push();
strokeWeight(20);
stroke(250,100,50);
line(100,50,100,250);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(200,50,200,200);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(200,200,250,250);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(100,250,150,320);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(250,250,470,250);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(150,320,540,320);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(470,250,640,120);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(540,320,660,220);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(640,120,890,120);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(660,220,860,220);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(660,220,920,220);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(890,120,1080,20);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(920,220,1100,115);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(1080,20,1490,20);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(1100,115,1350,115);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(1490,20, 1490, 600);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(1350,115,1350, 500);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(1490, 600, 600,600);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(1350, 500, 500,500);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(600,600,600,900);
pop();

push();
strokeWeight(20);
stroke(250,100,50);
line(500,500,500,900);
pop();
/*The push(##) method adds the value ## to the end of an array.  In the example to the right, the arrays for squareX and squareY initially have no values in them.*/
	squareX.push(mouseX);
	squareY.push(mouseY);

/*
To remove a value from an array, use the splice(loc, num) method.  This goes to the index value specified by loc and removes num values from the array, shortening it.

The following if() statements checks to see if the squareX.length is longer than 50 values and removes the oldest one (the first one) if it is.
*/

	if(squareX.length>50){
		squareX.splice(0,1);
		squareY.splice(0,1);
	}

	for(let i = 0; i<squareX.length; i= i+1){
		noStroke();
		fill(120, 0, 8*i, 25*i);
		rect(squareX[i], squareY[i], i, i); //try changing the graphic primitive-type to get other shapes to appear
	}

}
