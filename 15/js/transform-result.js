const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");
const origin = {x:200, y:200};  // 원점 좌표
const alpha = 0.7;     // 불투명도 값

ctx.fillStyle = "#ccc";
ctx.fillRect(origin.x, origin.y, 100, 100);

button.onclick = function() {
  let color = randomRGB();    // 무작위 색상 가져오기

  ctx.globalAlpha = alpha;
  ctx.translate(origin.x, origin.y);   // 원점 좌표로 이동
  ctx.rotate(Math.PI / 180 * 30);      // 30도 회전
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 100, 100);        // 원점 좌표로 이동한 위치에 사각형 그리기
  ctx.translate(-origin.x, -origin.y);  // 원래 위치로 돌아감
}


function randomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}