const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = function() {
  let pattern = ctx.createPattern(img, "repeat");   // 패턴 객체 만들기
  ctx.fillStyle = pattern;     // 채우기 스타일을 패턴으로 지정
  ctx.fillRect(0, 0, 200, 200);      // 패턴을 채운 사각형 그리기 
} 
img.src = "images/pattern.png";