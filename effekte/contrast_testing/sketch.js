var img;

function preload(){
  //img=loadImage('images/cs4all-logo.png');
}

function setup() {
  createCanvas(400, 600);
}

function draw() {
  
  background(255, 255, 255);
  noStroke();
  
  fill(150);
  
  ellipse(0, 50, 400);
  
  fill(50); 

  ellipse(370, 100, 470);
  
  fill(50); 
  ellipse(40, 300, 300); 
  
  fill(209);
  ellipse(400, 450, 500);
  
  fill(240); 
  ellipse(10,550,310); 
  
  
  textSize(30); 
  textStyle(BOLD)
  textAlign(CENTER);
  fill(255,255,255); 
  text("It's a disorder...", width/1.5,  130)
  
  fill(0, 0, 0);
  text("Not a decision", width/3.5, 500) // I'm the text on the bottom!
  
  image(img, 250, 500, 420/3, 320/3);
  
}