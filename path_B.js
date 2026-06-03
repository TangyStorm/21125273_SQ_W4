// ============================================================
// path_B.js: Level 2 - You fell backwards
// ============================================================

const BTN_Y = 380;
const BTN_W = 220;
const BTN_H = 60;

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

function draw() {
  // Pulling visuals from scenes.js
  drawBackground();
  drawTerrain();

  // Your Custom Narrative
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("You fell backwards down the cliff you arrived on.", width / 2, 80);
  
  textSize(16);
  fill(220);
  text("Gravity takes over. The ground is rushing up fast!", width / 2, 130);

  // New Choices that branch into Level 3
  drawButton(250, BTN_Y, BTN_W, BTN_H, "Swing hammer at ledge", isMouseOver(250, BTN_Y, BTN_W, BTN_H));
  drawButton(550, BTN_Y, BTN_W, BTN_H, "Brace for impact", isMouseOver(550, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  // Navigating down to Level 3 files
  if (isMouseOver(250, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("path_B1.html"); 
  }
  
  if (isMouseOver(550, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("path_B2.html"); 
  }
}