function setup() {
  createCanvas(470, 460);
}

function draw() {
  background(220); //Grau
  
  //Rechteck Hintergrund von Shock
  fill(255); //Hintergrund weiss
  stroke(255); //Linienfarbe weiss
  rect(10, 180, 450, 100);
  
  //Rechteck Buchstabe H
  fill(0); //Fuellfarbe schwarz
  stroke(0); // Linienfarbe schwarz
  rect(100, 190, 36, 80); //Rechteck-H, 36x80
  rect(176, 190, 4, 80); //Rechteck-H 4x80
  rect(136, 216, 40, 4); //Rechteck-H 40x4
  
  //Rechteck Buchstabe K
  rect(370, 190, 36, 80);
  //Unregelmaessige Vierecke-Buchstabe K
  quad(450, 190, 450, 194, 406, 210, 406, 206); //Viereck nach oben
  quad(420, 206, 424, 204, 450, 270, 446, 270); //Viereck nach unten
  
  //Kreise Buchstabe O
  ellipse(230, 230, 80, 80); //Kreis , Durchmesser 40mm schwarz
  fill(255); //Fuellfarbe weiss
  ellipse(230, 230, 72, 72); //Kreis, Durchmesser 38mm weiss
  fill(0);
  arc(230, 230, 80, 80, 0.25*PI, 1.75*PI);//Kreisabschnitt, schwarz
  //Durchmesser 80mm
  
  //Kreis Buchstabe C
  fill(0); //Fuellfarbe schwarz
  arc(320, 230, 80, 80, 0.25*PI, 1.75*PI); //Kreisabschnitt schwarz
  //Durchmesser 80mm
  
  fill(255); //Fuellfarbe weiss
  stroke(255);// Linienfarbe weiss
  ellipse(320, 230, 70, 70); //Kreis weiss Durchmesser 70mm
  fill(0);//Fuellfarbe schwarz
  stroke(0); //Linienfarbe schwarz
  arc(320, 230, 72, 72, 0.5*PI, 1.5*PI); //Halbkreis schwarz
  //Durchmesser 72mm
  
  //Kreis Buchstabe S
  fill(0); //Fuellfarbe schwarz
  arc(60, 230, 80, 80, 1.25*PI, 1.5*PI); //Sekment 1 scharz
  arc(60, 230, 80, 80, 0.25*PI, 0.5*PI); //Sekment 2 schwarz
  arc(60, 230, 80, 80, 0.5*PI, 0.75*PI); //Sekment 3 schwarz
  arc(60, 230, 80, 80, 1.5*PI, 1.75*PI); //Sekment 4 schwarz
  fill(255);
  stroke(255);
  arc(60, 230, 72, 72, 0.5*PI, 0.8*PI); //Sekment 5 weiss
  arc(60, 230, 72, 72, 1.5*PI, 1.8*PI); //Sekment 6 weiss
  
  
}