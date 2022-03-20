const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

// 원의 세로 길이를 축소해서 타원으로 그리기
ctx.strokeStyle = "blue";
ctx.scale(0.7, 1);
ctx.beginPath()
ctx.arc(200, 150, 50, 0, Math.PI * 2, true);
ctx.stroke();
ctx.closePath();