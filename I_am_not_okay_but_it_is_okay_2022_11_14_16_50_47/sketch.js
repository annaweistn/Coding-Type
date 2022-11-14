let myText;
let myText1;

function setup() {
  createCanvas(640, 360);
  let initialProps = {
    text: "I am not okay ",
    color: "white",
    size: 20,
    position: { x: 100, y: 120 },
  };
  let initialProps1 = {
    text: "But it is okay",
    color: "white",
    size: 40,
    position: { x: 50, y: 150 },
  };
  myText = createText(initialProps);
  myText1 = createText(initialProps1);
}

function draw() {
  background("black");
}

function mousePressed() {
  // basicPromises();
  friendlyPromises();
}

function basicPromises() {
  myText
    .animate({ color: "red", duration: 3 })
    .then(() => {
      return myText.animate({
        color: "white",
        size: 20,
        duration: 3,
      });
    })
    .then(() => {
      return myText.animate({
        size: 30,
        duration: 3,
      });
    })
    .catch((e) => console.error(`Oops: ${e}`));
}

function friendlyPromises() {
  myText.animate([
    { color: "red", duration: 3 },
    { color: "white", size: 20, duration: 3 },
    { size: 30, duration: 3 },
  ]);
  myText1.animate([
    { color: "green", duration: 2 },
    { color: "white", size: 20, duration: 2 },
    { size: 30, duration: 3 },
  ]);
}
