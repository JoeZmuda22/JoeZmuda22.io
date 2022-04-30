let squid1;
let squid2;
function preload() {
  squid1 = createImg('images/funnysquid.jpg','squid');
  squid2 = createImg('images/goodsquid.jpg', 'squid');
}
function setup() {
backbtn =	createA('Main_index.html', 'Press me to go back');
backbtn.position(400,10);
createCanvas(1000,1000);
squid1.position(50,100);
squid1.size(500,500)
squid2.position(600,100);
squid2.size(800,500)
}
function draw() {

}
