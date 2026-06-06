const BTN_Y = 380, BTN_W = 220, BTN_H = 60;

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

function draw() {
  drawBackground();
  background(230, 200, 255); // Sunset sky theme
  
  fill(100, 255, 100);
  textAlign(CENTER);
  textSize(24);
  text("ENDING 6: The Slow Ascent Victory", width / 2, 80);
  
  textSize(16); fill(50);
  text("By slowly reeling yourself in, you find a hidden pathway over the summit.", width / 2, 130);
  fill(100, 50, 150);
  text('"Patience is bitter, but its fruit is sweet. You won."', width / 2, 200);

  drawButton(width / 2, BTN_Y, BTN_W, BTN_H, "Play Again", isMouseOver(width / 2, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  if (isMouseOver(width / 2, BTN_Y, BTN_W, BTN_H)) makeChoice("index.html");
}