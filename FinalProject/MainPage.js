//Main web page design
let track;
let sketch2;
let squid;

function setup() {
	createCanvas(1920, 1080);
  track = createA('Track_index.html', 'Click here to play a fun game!!');
  track.position(10,10);
	sketch2 =	createA('Sketch2_index.html', 'Press me to see art!');
	sketch2.position(1280,10);
	squid = createA('squid_index.html','Dont Click ME!!!');
	squid.position(100,100);


}
