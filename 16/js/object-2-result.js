const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

const objs = [];
for (let i = 0; i < 20; i++) {
  const radius = Math.floor((Math.random() * 50)) + 10;    // 무작위 반지름
  const x = Math.random() * (canvas.width - radius * 2) + radius;     // 원점 무작위 x좌표
  const y = Math.random() * (canvas.height - radius * 2) + radius;     // 원점 무작위 y좌표
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;   // 무작위 색상
  objs.push(new Circle(x, y, radius, color));      // objs에 인스턴스 추가
}
// console.log(objs);

for (let i = 0; i < objs.length; i++) {
  objs[i].draw();
}