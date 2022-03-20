const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");  

let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.fillStyle = "green";
ctx.stroke(triangle);
ctx.fill(circle);