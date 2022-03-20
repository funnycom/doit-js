const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 200);
ctx.stroke();