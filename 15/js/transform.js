const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");
const origin = {x:200, y:200};
const alpha = 0.7;

ctx.fillStyle = "#ccc";
ctx.fillRect(origin.x, origin.y, 100, 100);

button.onclick = function() {
  let color = randomRGB();  // 무작위 색상 가져오기

  ctx.globalAlpha = alpha;    // 불투명도 지정
  ctx.translate(origin.x, origin.y);   // 원점 이동
  ctx.rotate(Math.PI / 180 * 30);    // 회전
  ctx.fillStyle = color;       // 무작위 색상 지정
  ctx.fillRect(0, 0, 100, 100);   // 회전한 도형 그리기
  ctx.translate(-origin.x, -origin.y);   // 원점 복구
}

function randomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`; 
}