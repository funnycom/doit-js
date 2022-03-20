const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
ctx.stroke();