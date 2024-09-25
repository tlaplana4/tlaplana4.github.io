let mic;

function setup() {
  createCanvas(1500, 1500);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  vol=mic.getLevel();
  vpic=map(vol,0,1,0,100);
  beginShape();
  vertex(600,100);
  //pic
  vertex(400,300);
  vertex(200,400);
  vertex(400,400);
  vertex(200,400+vpic);
  vertex(400,500);
  //cos
  vertex(600,900);
  vertex(900,900);
  vertex(1200,400);
  //ploma
  vertex(1400,400);
  vertex(1350,350);
  vertex(1400,300);
  vertex(1300,300);
  vertex(1200,400);
  //cos
  vertex(700,300);
  vertex(600,100);
  endShape();
}
