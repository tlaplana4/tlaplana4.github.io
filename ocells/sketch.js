let mic;

function setup() {
  createCanvas(1000, 500);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  vol=mic.getLevel();
  vpic=map(vol,0,1,0,10);
  beginShape();
  vertex(60,10);
  //pic
  vertex(40,30);
  vertex(20,40);
  vertex(40,40);
  vertex(20,40+vpic);
  vertex(40,50);
  //cos
  vertex(60,90);
  vertex(90,90);
  vertex(120,40);
  //ploma
  vertex(140,40);
  vertex(135,35);
  vertex(140,30);
  vertex(130,30);
  vertex(120,40);
  //cos
  vertex(70,30);
  vertex(60,10);
  endShape();
}
