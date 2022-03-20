const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";

ctx.beginPath()
ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();
ctx.stroke();