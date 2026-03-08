// index.ts
window.addEventListener("load", function() {
  const LENGTH = 500;
  const STEP = 10;
  const canvas = document.getElementById("window");
  canvas.height = LENGTH;
  canvas.width = LENGTH;
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = 2;
  let redrawButton = document.getElementById("redraw");
  redrawButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, LENGTH, LENGTH);
    draw(ctx, LENGTH, STEP);
  });
  draw(ctx, LENGTH, STEP);
});
var randomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
function draw(ctx, LENGTH, STEP) {
  for (let i = 1;i < LENGTH / STEP / 2; i++) {
    ctx.beginPath();
    ctx.strokeStyle = randomRGB();
    ctx.moveTo(0, LENGTH / 2 - STEP * i);
    ctx.lineTo(STEP * i, 0);
    ctx.stroke();
  }
  for (let i = 1;i < LENGTH / STEP / 2; i++) {
    ctx.beginPath();
    ctx.strokeStyle = randomRGB();
    ctx.moveTo(0, LENGTH / 2 + STEP * i);
    ctx.lineTo(0 + STEP * i, LENGTH);
    ctx.stroke();
  }
  for (let i = 1;i < LENGTH / STEP / 2; i++) {
    ctx.beginPath();
    ctx.strokeStyle = randomRGB();
    ctx.moveTo(LENGTH / 2 + STEP * i, 0);
    ctx.lineTo(LENGTH, STEP * i);
    ctx.stroke();
  }
  for (let i = 1;i < LENGTH / STEP / 2; i++) {
    ctx.beginPath();
    ctx.strokeStyle = randomRGB();
    ctx.moveTo(LENGTH, LENGTH / 2 + STEP * i);
    ctx.lineTo(LENGTH - STEP * i, LENGTH);
    ctx.stroke();
  }
  ctx.stroke();
}
