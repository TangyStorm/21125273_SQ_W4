const BTN_Y = 380, BTN_W = 220, BTN_H = 60;
let failureQuote;

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
  failureQuote = getRandomQuote();
}

function draw() {
  drawBackground();
  drawTerrain();

  fill(255, 150, 50);
  textAlign(CENTER);
  textSize(24);
  text("ENDING 8: The Mountain Hermit", width / 2, 80);
  
  textSize(16); fill(220);
  text("Your anchor holds perfectly. You decide to live on this shelf forever.", width / 2, 130);
  fill(255, 180, 100);
  text('"' + failureQuote + '"', width / 2, 200);

  drawButton(width / 2, BTN_Y, BTN_W, BTN_H, "Try Climbing Again", isMouseOver(width / 2, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  if (isMouseOver(width / 2, BTN_Y, BTN_W, BTN_H)) makeChoice("index.html");
}