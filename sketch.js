let x = 36;
let y = 376;
let moveSpeed = 2;
let bgImg, shockImg, denialImg, bargainingImg, angerImg, depressionImg, acceptanceImg, hopefulnessImg;
let typeHeading, typeBody;
let size = 14;
let halfSize = size/2;

function preload() {
  bgImg = loadImage('assets/background.png');
  typeHeading = loadFont('assets/InknutAntiqua-Light.ttf');
  typeBody = loadFont('assets/InknutAntiqua-SemiBold.ttf');
}

function setup() {
  createCanvas(1920, 1080);
  shockImg = loadImage('assets/shock.png');
  denialImg = loadImage('assets/denial.png');
  bargainingImg = loadImage('assets/bargaining.png');
  angerImg = loadImage('assets/anger.png');
  depressionImg = loadImage('assets/depression.png');
  acceptanceImg = loadImage('assets/acceptance.png');
  hopefulnessImg = loadImage('assets/hopefulness.png');
}

function draw() {
  if (keyIsDown(ENTER)) {
    saveCanvas('dear_', 'png');
  }

  background(200);
  image(bgImg, 0, 0);
  
  stroke(200);
  strokeWeight(2);
  for (let i = 0; i < 200; i++) {
    point(random(width), random(height));
  }
  
  mazeSetUp();
  openning();
  
  fill(246, 133, 241);
  noStroke();
  ellipse(x, y, size, size);
  
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    y-=moveSpeed;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    y+=moveSpeed;
  }
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    x-=moveSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    x+=moveSpeed;
  }
  if (x+10 == width) {
    x-=moveSpeed;
  }
  if (y+10 == height) {
    y-=moveSpeed;
  }
  if (x-10 < 0) {
    x+=moveSpeed;
  }
  if (y-10 < 0) {
    y+=moveSpeed;
  }

  if (x>90-halfSize && x<120+halfSize && y>360-halfSize && y<450+halfSize) {
    letterButton(66, 368);
  }
  if (x>390-halfSize && x<420+halfSize && y>810-halfSize && y<900+halfSize) {
    letterButton(367, 879);
  }
  if (x>330-halfSize && x<360+halfSize && y>390-halfSize && y<480+halfSize) {
    letterButton(366, 398);
  }
  if (x>150-halfSize && x<180+halfSize && y>750-halfSize && y<840+halfSize) {
    letterButton(186, 818);
  }
  if (x>1500-halfSize && x<1530+halfSize && y>90-halfSize && y<180+halfSize) {
    letterButton(1476, 100);
  }
  if (x>1500-halfSize && x<1590+halfSize && y>960-halfSize && y<990+halfSize) {
    letterButton(1507, 938);
  }
  if (x>1800-halfSize && x<1890+halfSize && y>690-halfSize && y<720+halfSize) {
    letterButton(1806, 728);
  }
  
  if (x>90-halfSize && x<120+halfSize && y>360-halfSize && y<450+halfSize && mouseIsPressed === true) {
    stageOne();
  }
  if (x>390-halfSize && x<420+halfSize && y>810-halfSize && y<900+halfSize && mouseIsPressed === true) {
    stageTwo();
  }
  if (x>330-halfSize && x<360+halfSize && y>390-halfSize && y<480+halfSize && mouseIsPressed === true) {
    stageThree();
  }
  if (x>150-halfSize && x<180+halfSize && y>750-halfSize && y<840+halfSize && mouseIsPressed === true) {
    stageFour();
  }
  if (x>1500-halfSize && x<1530+halfSize && y>90-halfSize && y<180+halfSize && mouseIsPressed === true) {
    stageFive();
  }
  if (x>1500-halfSize && x<1590+halfSize && y>960-halfSize && y<990+halfSize && mouseIsPressed === true) {
    stageSix();
  }
  if (x>1800-halfSize && x<1890+halfSize && y>690-halfSize && y<720+halfSize && mouseIsPressed === true) {
    stageSeven();
  }
}

//////////////////////////////////////////////////////////////////////////
function mazeSetUp () {
  blockingWay(0, 60, 150, 300);
  blockingWay(150, 60, 120, 120);
  blockingWay(270, 60, 1260, 30);
  blockingWay(1530, 60, 30, 150);
  blockingWay(1560, 60, 180, 120);
  blockingWay(1740, 60, 180, 570);
  blockingWay(0, 390, 90, 570);
  blockingWay(120, 360, 30, 480);
  blockingWay(180, 210, 30, 270);
  blockingWay(240, 180, 30, 270);
  blockingWay(300, 120, 30, 360);
  blockingWay(180, 480, 150, 330);
  blockingWay(120, 840, 270, 30);
  blockingWay(120, 900, 300, 30);
  blockingWay(240, 930, 180, 30);
  blockingWay(0, 960, 210, 60);
  blockingWay(210, 990, 150, 30);
  blockingWay(360, 960, 60, 60);
  blockingWay(360, 420, 30, 420);
  blockingWay(330, 330, 90, 60);
  blockingWay(360, 90, 30, 210);
  blockingWay(1530, 210, 180, 120);
  blockingWay(1680, 330, 30, 270);
  blockingWay(1530, 360, 120, 90);
  blockingWay(1530, 450, 60, 150);
  blockingWay(1620, 480, 30, 150);
  blockingWay(1530, 630, 270, 330);
  blockingWay(1800, 630, 120, 60);
  blockingWay(1830, 720, 90, 270);
  blockingWay(1500, 990, 420, 30);
  blockingWay(420, 120, 1080, 900);
}

function blockingWay(blockX, blockY, blockW, blockH) {
    noStroke();
    noFill();
    rect(blockX, blockY, blockW, blockH);
    
    if (x+10 >= blockX && x-10 <= blockX + blockW && y+10 == blockY) {
      y-= moveSpeed;
    }
    if (x+10 >= blockX && x-10 <= blockX + blockW && y-10 == blockY + blockH) {
      y+= moveSpeed;
    }
    if (x+10 == blockX && y+10 >= blockY && y-10 <= blockY + blockH) {
      x-=moveSpeed;
    }
    if (x+10 >= blockX && x-10 <= blockX + blockW && y+10 >= blockY && y-10 <= blockY + blockH) {
      x+= moveSpeed;
    }
}

function letterButton (triX, triY) {
  fill(107, 140, 255);
  noStroke();
  triangle(triX+9, triY, triX, triY+15, triX+17.5, triY+15);
  
  if (triX === 66 && keyIsDown(70)){
    stageOne();
  }
  if (triX === 367 && keyIsDown(70)){
    stageTwo();
  }
  if (triX === 366 && keyIsDown(70)){
    stageThree();
  }
  if (triX === 186 && keyIsDown(70)){
    stageFour();
  }
  if (triX === 1476 && keyIsDown(70)){
    stageFive();
  }
  if (triX === 1507 && keyIsDown(70)){
    stageSix();
  }
  if (triX === 1806 && keyIsDown(70)){
    stageSeven();
  }
}

 function openning () {
  dear(217, 223, 224);
  textCol(217, 223, 224);
  text('This is my first time here', 1020, 600);
  text('Lost in this maze', 1020, 660);
  text('But you can', 1020, 720);
  text('And', 1020, 780);
  textCol(246, 133, 241);
  text('hold w, a, s, d to move', 1143, 720);
  textCol(107, 140, 255);
  text('hold f to open letters', 1068, 780);
 }

 function stageOne () {
  base(52,49,100);
  image(shockImg, 480, 180);
  dear(70,70,65);
  textCol(121, 100, 199);
  text('Missed calls', 1140, 510);
  text('Messages waiting for responses', 1020, 570);
  text('Lots of unanswered questions', 900, 630);
  text('Why things happened so quickly?', 960, 690);
 }
 function stageTwo () {
  base(80,63,45);
  image(denialImg, 480, 180);
  dear(173,118,126);
  textCol(92, 138, 176);
  text('I really don’t understand', 1020, 570);
  text('Still many things we haven’t done together', 930, 630);
  text('Things were left unfinished', 1006, 690);
  text('Promises remain unfulfilled', 1003, 750);
 }
 function stageThree () {
  base(76,48,80);
  image(bargainingImg, 480, 180);
  dear(90,60,161);
  textCol(128, 108, 189);
  text('I’m still here', 600, 450);
  text('Waiting for you', 660, 510);
  text('Things will become meaningful', 947, 630);
  textCol(90, 60, 161);
  text('Just one step back', 1138, 570);
  text('“Bzm vd ad snfdsgdq zfzhm?”', 811, 780);
 }
 function stageFour () {
  base(82,42,42);
  image(angerImg, 480, 180);
  dear(84,36,49);
  textCol(84, 36, 49);
  text('It’s all over', 990, 630);
  text('Everything’s gone wrong', 930, 690);
  text('I wonder why this happened to me', 990, 750);
  text('Why am I such a bad lover?', 1050, 810);
 }
 function stageFive () {
  base(46,57,93);
  image(depressionImg, 480, 180);
  dear(74,89,138);
  textCol(193, 202, 230);
  text('All the lights I cannot see', 990, 630);
  text('All the blues I cannot hide', 990, 690);
  text('There’s nothing I could do', 990, 750);
  textCol(226, 231, 243);
  text('I’ve fallen so hard', 990, 810);
 }
 function stageSix () {
  base(42,69,69);
  image(acceptanceImg, 480, 180);
  dear(214,233,228);
  textCol(234, 245, 239);
  text('What had to happen happened', 960, 600);
  text('We don’t intend to cause others pain', 1020, 660);
  text('The importance isn’t being together', 990, 720);
  text('But we were happy together', 930, 780);
 }
 function stageSeven () {
  base(48,60,39);
  image(hopefulnessImg, 480, 180);
  dear(240,238,220);
  textCol(240, 238, 220);
  text('The destination itself is not the objective', 750, 480);
  text('It was the process we went through', 810, 540);
  textCol(114, 175, 134);
  text('I appreciate you being with me', 930, 690);
  text('We deserve our own happiness', 990, 750);
 }

 function base (r,g, b) {
  fill(r, g, b, 127);
  noStroke();
  rect(0, 0, width, height);
 }

function dear(r, g, b) {
  fill(r, g, b);
  textFont(typeHeading);
  textSize(110);
  text('dear_', 533, 347);
}

function textCol(r, g, b) {
  fill(r, g, b);
  textFont(typeBody);
  textSize(18);
}