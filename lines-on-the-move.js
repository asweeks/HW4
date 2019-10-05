  var m = 5;

   function setup() {
     createCanvas(400, 400);
     colorMode(HSB);
     background(255);

   }

   function draw() {
     // background(255);

     //for (var x = 70; x < width;x = x + 10) {
     line(x, height / 2, x + 100, height / 2 - 75);
     //}
     x += m;
     if (x > width || x < 70) {
       m *= -1;
       background(255);
     }


   }
