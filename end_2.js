const BTN_Y = 380, BTN_W = 220, BTN_H = 60;

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

function draw() {
  drawBackground();
  // Drawing clean sky instead of rocks to show you crested the mountain
  background(100, 180, 255); 
  
  fill(100, 255, 100);
  textAlign(CENTER);
  textSize(24);
  text("ENDING 2: VICTORY!", width / 2, 80);
  
  textSize(16); fill(255);
  text("You carefully hoist yourself over the final ridge. You float into space.", width / 2, 130);
  fill(255, 230, 100);
  text('"You did it. There is no feeling more intense than finishing."', width / 2, 200);

  drawButton(width / 2, BTN_Y, BTN_W, BTN_H, "Play Again", isMouseOver(width / 2, BTN_Y, BTN_W, BTN_H));
}

function mousePressed() {
  if (isMouseOver(width / 2, BTN_Y, BTN_W, BTN_H)) makeChoice("index.html");
}