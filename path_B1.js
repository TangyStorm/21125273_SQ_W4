// ============================================================
// path_B1.js: Level 3 - Catching the Ledge
// ============================================================

const BTN_Y = 380;
const BTN_W = 220;
const BTN_H = 60;

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

function draw() {
  drawBackground();
  drawTerrain();

  // Narrative text
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("Sparks fly as the hammer tip catches a jagged ridge!", width / 2, 80);
  
  textSize(16);
  fill(220);
  text("Your momentum stops violently. You are suspended by pure friction.", width / 2, 130);

  // Level 4 Ending choices
  drawButton(250, BTN_Y, BTN_W, BTN_H, "Pogo off the sparks", isMouseOver(250, BTN_Y, BTN_W, BTN_H));
  drawButton(550, BTN_Y, BTN_W, BTN_H, "Slowly reel yourself in", isMouseOver(550, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  if (isMouseOver(250, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("end_5.html"); // Leads to Ending 5
  }
  
  if (isMouseOver(550, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("end_6.html"); // Leads to Ending 6
  }
}