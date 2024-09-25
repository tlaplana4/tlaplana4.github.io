let mic;

function setup() {
  createCanvas(1300, 900);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  vol=mic.getLevel();
  vpic=map(vol,0,1,0,100);
  beginShape();
  vertex(450,50);
  //pic
  vertex(250,250);
  vertex(50,350);
  vertex(250,350);
  vertex(50,350+vpic);
  vertex(250,450);
  //cos
  vertex(450,850);
  vertex(750,850);
  vertex(1050,350);
  //ploma
  vertex(1250,350);
  vertex(1200,300);
  vertex(1250,250);
  vertex(1150,250);
  vertex(1050,350);
  //cos
  vertex(550,250);
  vertex(450,50);
  endShape();
}
