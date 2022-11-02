let myFont;
function preload() {
  myFont = loadFont("Sniglet Regular.otf");
}

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(240);
  noStroke();
  fill(0);
  textSize(60);
  textFont(myFont);
  text("HEY!", 120, 210);
}