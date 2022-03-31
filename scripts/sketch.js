let img1; //variable
let img2;
let img3;
let img4;
let imgpost;
let imglogo;
let fontNiagsol;
//let txt1;


function preload(){
img1 = createImg('assets/robotbw.png', "bettywhite");
img2 = createImg('assets/xbox5.png','xbox');
img3 = createImg('assets/robotdog.png', 'dog');
img4 = createImg('assets/superbowl.jpg','ad');
imgpost = createImg('assets/postmalone.png','post');
imglogo = createImg('assets/Zmuda Post.png', 'logo');
txt1 = createP('Rumor Has It Betty White Is Now a Robot');
txt2 = createP('As many of us are now finding out Betty White has been brought back to life but has a robo body. <br/> Form other sources it also apears she has been building a robot army and plans to take over the world. ');
txt3 = createP('THE ALL NOW XBOX 5 WITH A FIMILIAR LOOK');
txt4 = createP('2TB SSD <br/> NVIDA Graphics <br/> Best Cooling on The Market');
txt5 = createP('Betty Whites army of robo dogs is said to attack Russia in this coming week, it is unclear what Putin will do. <br/>It also apears these robo dogs are the vicious and terrifying weiner dog breed. With that being said Betty White has put a request <br/>for any unwanted winer dogs.');
txt6 = createP('Super Bowl 77 in Minneapolis MN <br/> Tickets Are Now Available at <br/> wwww.superbowl77.com');
txt7 = createP('PostMalone is back!! <br/> Get your tickets today!!');
}

function setup() {
  img2.size(420,400);
  img1.parent("betty");
  imgpost.parent('post');
  imglogo.parent('logo');
  img2.parent("left")
  img4.parent("left");
  img1.size(800,600)
  img3.position(1300, 800)
  img3.size(420,300)
  img4.size(420,400)
  img4.position(20, 600)
}

function draw() {
  txt1.style('font-size', '25px');
  txt1.style('font-family', 'serif');
  txt2.style('font-size', '25px');
  txt1.position(880,410);
  txt2.position(570,1100);
  txt4.position(100,250);
  txt4.style('font -size', '20px');
  txt3.style('font-size', '20px');
  txt3. position(20,10);
  txt5.style('font-size', '25px');
  txt5.position(550,1200);
  txt6.style('font-size', '22px');
  txt6.position(60,1000);
  txt7.style('font-size', '25px');
  txt7.position(1600, 250);
}
  //text('CopyRight New York Times', 810, 510);//
