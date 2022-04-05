const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.font = "bold 300px sans-serif";
ctx.fillText("GOOD", 100, 320);

ctx.beginPath();
ctx.globalCompositeOperation = "source-in";
let img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.src = "images/text-bg.jpg";