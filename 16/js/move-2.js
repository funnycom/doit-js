const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight;  // 캔버스 높이

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,    // 가로로 움직일 크기 (x축 이동 속도) 
  dy: 4,     // 세로로 움직일 크기 (y축 이동 속도)
  color: "#222"
}

  function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = circle.color;
    ctx.fill();
  }
  
  function move() {
    drawCircle();
    circle.y += circle.dy;   
    requestAnimationFrame(move);
  }
  
  move();