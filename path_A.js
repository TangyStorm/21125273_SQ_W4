javascript
// ============================================================
// path_A.js: Level 2 - You hooked the branch
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

  // New Narrative
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("You heave yourself up onto a narrow ledge.", width / 2, 80);
  
  textSize(16);
  fill(220);
  text("Above you is an old lantern. To the right is a chimney gap.", width / 2, 120);

  // New Choices
  drawButton(250, BTN_Y, BTN_W, BTN_H, "Swing to Lantern", isMouseOver(250, BTN_Y, BTN_W, BTN_H));
  drawButton(550, BTN_Y, BTN_W, BTN_H, "Wedge in Chimney", isMouseOver(550, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  if (isMouseOver(250, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("path_A1.html"); // Jumps to Level 3!
  }
  
  if (isMouseOver(550, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("path_A2.html"); // Jumps to Level 3!
  }
}