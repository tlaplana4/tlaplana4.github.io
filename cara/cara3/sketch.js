function setup() 
{
  createCanvas(600,400);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  let pseuRan= noise(frameCount*0.1);
  let mx = map(mouseX, 0,600,-10,+10);
  let my = map(mouseY, 0,400,-10,+10);
  let cX =300;
  let cY =250;
  let vol= mic.getLevel();
  let vulls= map(vol,0,1,0,100);
  let vboca= map(vol,0,1,0,300);
  console.log("vulls is "+vulls)
  console.log("vol is "+vol)
  background(127, map(pseuRan, 0,1,0,255), 24);
  //Cara
  fill(227,192,139);
  ellipse(cX,cY,250,300);
  //Ull dret
  fill(255);
  ellipse(cX-50,cY-50,50,50);
  fill(84,42,14);
  ellipse(cX-50+mx,cY-50+my,15,15);
  //Ull esquerre
  fill(255);
  ellipse(cX+50,cY-50,50,50);
  fill(84,42,14);
  ellipse(cX+50+mx,cY-50+my,15,15);
  //Boca
  fill(200,15,15);
  arc(cX,cY+50,100,10+vboca,0,PI,CHORD);
  //Nas
  fill(219,169,116)
  triangle(300,10*sin(frameCount*0.1)+237.5,300,10*sin(frameCount*0.1)+262.5,275,10*cos(frameCount*0.1)+250);
}
