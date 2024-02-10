const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const blockSize = 15;

const canvas = document.getElementById("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const ctx = canvas.getContext("2d");

const fillCanvas = () => {
  for(let x = 0; x < canvasWidth ; x+= blockSize) {
    for(let y = 0;y < canvasHeight ; y += blockSize) {
      fillSquare(x, y);
    }
  }
}

const fillSquare = (x, y) => {
  const offsetX = random(-15, 15) - blockSize / 2;
  const offsetY = random(-15, 15) - blockSize / 2;
  
  ctx.fillStyle = randomColor();
  ctx.fillRect(x+offsetX, y+offsetY, blockSize, blockSize);
}

const random = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const randomColorLetter = () => {
  var r = random(0, 15);
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"][r];
}

const randomColor = () => {
  var col = "#"
  for (var i = 0; i < 6; i++) {
    col += randomColorLetter();
  }
  return col;
}

/*await (async () => {
  while(true) {
fillCanvas();
await new Promise(r => setTimeout(r, 100));
}
})()

await new Promise(r => setTimeout(r, 50))*/
let timeElem = document.getElementById("time");
(async () => {
      let t = new Date().toLocaleTimeString();
    t = t.split(":");
    t.pop();
    t = t.join(":");
    timeElem.innerText = t;
    await new Promise((r) => setTimeout(r, 500));
})()

while(true) {
fillCanvas();
fillCanvas();
await new Promise(r => setTimeout(r, 50));
}