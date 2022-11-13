const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(260, 100);
ctx.lineTo(120, 250);
ctx.lineTo(170, 30);
ctx.lineTo(220, 250);
ctx.lineTo(80, 100);
ctx.closePath();

// 방법1) 테두리만 그리기
ctx.stroke();     

// 방법2) 색상과 테두리 모두 보이게 
// ctx.fillStyle = "yellow";
// ctx.fill();
// ctx.stroke();

// 방법3) 겉테두리만 보이게
// ctx.stroke();
// ctx.fillStyle = "yellow";
// ctx.fill();

// 방법4) 테두리는 표시하지 않게
// ctx.fillStyle = "yellow";
// ctx.fill();

