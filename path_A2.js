// ============================================================
// path_A2.js: Level 3 - Wedged in the Chimney Fissure
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
  text("You slide the hammer head deep into the chimney gap.", width / 2, 80);
  
  textSize(16);
  fill(220);
  text("You are completely stuck in place, safe but entirely frozen.", width / 2, 130);

  // Level 4 Ending choices
  drawButton(250, BTN_Y, BTN_W, BTN_H, "Leverage upward hard", isMouseOver(250, BTN_Y, BTN_W, BTN_H));
  drawButton(550, BTN_Y, BTN_W, BTN_H, "Yank hammer to reset", isMouseOver(550, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  if (isMouseOver(250, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("end_3.html"); // Leads to Ending 3
  }
  
  if (isMouseOver(550, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("end_4.html"); // Leads to Ending 4
  }
}