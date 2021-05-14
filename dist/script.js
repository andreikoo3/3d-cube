let a = 5;
s=150
function setup() {
  cnv=createCanvas(1200, 650,WEBGL);
  noFill()
  strokeWeight(0.2)
  angleMode(DEGREES)
}

function draw() {
  background(0);
  t=frameCount/2;
  rotateX(t);
  rotateY(t);
  rotateZ(t);
  s=50+100*cos(t)*cos(t)
  stroke(0)
  box(5*s,5*s,5*s);
  
  stroke(50,255,200);

  for(let i=1;i<2*s/a;i++){
    stroke(255, 252, 145)
    drawLine(s-a*i,s,s,s,-s,s-a*i);
    drawLine(s,-s,s-a*i,s-a*i,s,-s);
    drawLine(s-a*i,s,-s,-s,-s,s-a*i);
    drawLine(-s,-s,s-a*i,s-a*i,s,s);
    stroke(255, 194, 89)
    push()
    rotateY(90)
    drawLine(s-a*i,s,s,s,-s,s-a*i);
    drawLine(s,-s,s-a*i,s-a*i,s,-s);
    drawLine(s-a*i,s,-s,-s,-s,s-a*i);
    drawLine(-s,-s,s-a*i,s-a*i,s,s);
    pop()
  }
  
  
}

function drawLine(x1, y1, z1, x2,y2, z2){
  beginShape();
  vertex(x1,y1,z1);
  vertex(x2,y2,z2);  
  endShape();
}

function drawAxes(){
  stroke(200,0,0)
  drawLine(200,0,0,-200,0,0)
  stroke(0,200,0)
  drawLine(0,200,0,0,-200,0)
  stroke(0,0,200)
  drawLine(0,0,200,0,0,-200)
}