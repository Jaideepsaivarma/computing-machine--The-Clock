//Creating Variables For All Unints....
var Hour = hour();
var Minute = minute();
var Second = second();
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);

  secondAngle = map(Second,0,60,0,360);
  push();
  translate(0,0);
  rotate(secondAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}