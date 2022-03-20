const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);   // 캔버스 크기에 맞게 지정
} 
img.src = "images/bird.jpg";
ctx.beginPath();
ctx.arc(300, 200, 150, 0, Math.PI * 2, false);
ctx.clip();