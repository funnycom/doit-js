const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.globalAlpha = 0.3;
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 50);
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.fillRect(150, 50, 100, 50);
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(250, 50, 100, 50);
ctx.fillStyle = "rgb(255, 255, 0)";
ctx.fillRect(350, 50, 100, 50);