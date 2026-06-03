// ============================================================
// start.js: Level 1 - The Opening Scene
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

  // The Narrative
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("You wake up inside a cast-iron cauldron.", width / 2, 80);
  
  textSize(16);
  fill(220);
  text("A sheer cliff faces you. A Yosemite hammer rests in your hands.", width / 2, 120);
  text("One wrong move will send you back to the beginning.", width / 2, 150);

  // The Choices
  drawButton(250, BTN_Y, BTN_W, BTN_H, "Hook the dead branch", isMouseOver(250, BTN_Y, BTN_W, BTN_H));
  drawButton(550, BTN_Y, BTN_W, BTN_H, "Pogo off the smooth rock", isMouseOver(550, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  // Using the navigation logic from game.js
  if (isMouseOver(250, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("path_A.html"); // Jumps to the Branch A HTML file
  }
  
  if (isMouseOver(550, BTN_Y, BTN_W, BTN_H)) {
    makeChoice("path_B.html"); // Jumps to the Branch B HTML file
  }
}