// ============================================================
// path_A1.js: Level 3 - The Swaying Lantern
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
  text("The hammer hooks the old metal lantern!", width / 2, 80);
  
  textSize(16);
  fill(220);
  text("It squeaks loudly, swaying back and forth over the dark abyss.", width / 2, 130);

  // Level 4 Ending choices
  drawButton(250, BTN_Y, BTN_W, BTN_H, "Pogo off the swing", isMouseOver(250, BTN_Y, BTN_W, BTN_H));
  drawButton(550, BTN_Y, BTN_W, BTN_H, "Carefully hoist up", isMouseOver(550, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  if (isMouseOver(250, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("end_1.html"); // Leads to Ending 1
  }
  
  if (isMouseOver(550, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("end_2.html"); // Leads to Ending 2
  }
}