// ============================================================
// scenes.js: Visuals & Mood (Getting Over It Theme)
// ============================================================

function drawBackground() {
  // Harsh sunset orange
  background(255, 120, 50); 
  
  // Distant pale sun
  fill(255, 200, 150, 150);
  noStroke();
  circle(width / 2, height / 2 + 50, 250);
}

function drawTerrain() {
  // Jagged, unforgiving slate/rock
  fill(30, 35, 40); 
  noStroke();
  
  beginShape();
  vertex(0, height);
  vertex(0, 250);
  vertex(150, 200);
  vertex(280, 300);
  vertex(450, 120); // A steep cliff
  vertex(550, 180);
  vertex(800, 100);
  vertex(800, height);
  endShape(CLOSE);
  
  // The Cauldron (drawn at the bottom left)
  fill(10);
  arc(150, 180, 60, 60, 0, PI);
  fill(150);
  rect(145, 140, 10, 40); // The hammer handle sticking out
}

function drawButton(x, y, w, h, label, isHovered) {
  push();
  rectMode(CENTER);
  
  // Buttons look like rusted iron or cold steel
  fill(isHovered ? color(100, 90, 90) : color(50, 45, 45));
  stroke(isHovered ? color(255, 150, 50) : color(20));
  strokeWeight(3);
  rect(x, y, w, h, 4);

  fill(isHovered ? color(255) : color(200));
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text(label, x, y);
  pop();
}

function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}