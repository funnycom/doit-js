const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight;  // 캔버스 높이

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "#222"
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

function move() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  circle.x += circle.dx;   // circle.x = circle.x + circle.dx

  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
  }
  
  requestAnimationFrame(move);
}

move();