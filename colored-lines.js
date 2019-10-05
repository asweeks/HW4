function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 10; x < width-10; x = x + 40) {
    stroke(x/2,200,200);
    line(x, height/2, mouseX, mouseY);
  }
}
