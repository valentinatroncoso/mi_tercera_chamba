var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,216,223);
}

function draw() {
  d=random(10,20);
  fill(255,random(400,200));
  ellipse(mouseX,mouseY,d,d);
}