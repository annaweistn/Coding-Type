function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill()
  stroke(0)
  
  // s
  line(120, 140, 80, 170) // oben rechts nach link
  line(80, 170, 120, 200) // mitte links nach rechts
  line(120, 200, 80, 240) // unten rechts nach links
  
  // h
  line(140, 140, 140, 240) // links
  line(160, 140, 160, 240) // rechts
  line(140, 200, 160, 200) // mitte
  
  // o
  arc(200,200, 50, 50, -PI, 0, CHORD);  // halbkreis oben
  arc(200,200,50,50,0, -PI, CHORD); // halbkreis unten
  
  // c
  // arc(250,180, 50, 50, -PI, 0, CHORD);  // halbkreis oben
  arc(265,200,50,50, radians(90),  radians(270) );
  line(265, 175, 265, 225) // rechts
  
  // k
  line(280, 140, 280, 240) // links
  line(280, 200, 320, 140) // mitte links nach rechts oben
  line(280, 200, 320, 240) // mitte links nach rechts unten
  
}