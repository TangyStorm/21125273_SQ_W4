// ============================================================
// path_B2.js: Level 3 - Bracing for Impact
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
  text("CRASH! You land heavily on a snowy mountain shelf.", width / 2, 80);
  
  textSize(16);
  fill(220);
  text("The iron cauldron absorbed the worst of it, but the snow is sliding!", width / 2, 130);

  // Level 4 Ending choices
  drawButton(250, BTN_Y, BTN_W, BTN_H, "Leap blindly out of snow", isMouseOver(250, BTN_Y, BTN_W, BTN_H));
  drawButton(550, BTN_Y, BTN_W, BTN_H, "Hammer anchor down", isMouseOver(550, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  if (isMouseOver(250, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("end_7.html"); // Leads to Ending 7
  }
  
  if (isMouseOver(550, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("end_8.html"); // Leads to Ending 8
  }
}