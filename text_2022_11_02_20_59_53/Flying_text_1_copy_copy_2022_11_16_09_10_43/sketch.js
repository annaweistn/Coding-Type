

let items = [];
let msec  = 500; //every 500ms. 
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  setInterval(add_item,msec);  // Add an item every 500ms. 
}

function draw() {
  background('black');
  for (let i = 0; i < items.length; i++) {     // Draw all items
    push();
//    textSize(items[i].size);   // kll disable use scale instead, but not better
    translate( items[i].left, items[i].top);
    fill(255, items[i].opacity);
    scale(items[i].size/50.0);
    text(items[i].text,0,0);
    items[i].size += 1;//0.1;// Increase size and lower opacity each draw to animate
    items[i].opacity -= 0.5;
    pop();
  }
  // Remove all invisible items to increse performance
  items = items.filter(function(item) { 
    return item.opacity > 0;
  })
}

function add_item() {
    items.push({
      text: "Depression ",
      size: 10,
      opacity: 255,
      left: random(windowWidth),
      top: random(windowHeight)
    });
  count++;
}