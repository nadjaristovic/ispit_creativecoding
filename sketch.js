function setup() {
  createCanvas(1920, 1080);
  background(20);
}

function draw() {
  background(20,10);
  strokeWeight(1);
  stroke(0, 20, 250);
  line ( 0, 0, mouseX, mouseY );
}