const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight;  // 캔버스 높이

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  // draw 메서드
  this.draw = function() {  
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

const circleOne = new Circle(100, 100, 50, "red");   // 인스턴스 만들기
const circleTwo = new Circle(200, 200, 20, "blue");   // 인스턴스 만들기
circleOne.draw();
circleTwo.draw();