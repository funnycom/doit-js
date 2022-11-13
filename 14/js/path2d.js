const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");  

let triangle = new Path2D();   // 삼각형 경로 객체
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();    // 원 경로 객체
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.fillStyle = "green";
ctx.stroke(triangle);
ctx.fill(circle);