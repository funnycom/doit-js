const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 기본 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);
ctx.save();

// 확대한 후 사각형
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);

ctx.restore();
ctx.strokeRect(200, 50, 100, 50);