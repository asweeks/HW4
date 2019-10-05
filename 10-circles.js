function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i = i + 10) {
    ellipse(x[i], y[i], 1.5*(x.length - i));
  }

  x = x.slice(-90); // remove all but the last 50 x values
  y = y.slice(-90); // remove all but the last 50 y values
}
