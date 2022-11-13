const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

ctx.beginPath();
ctx.moveTo(50, 200);   // 곡선 시작 위치
ctx.quadraticCurveTo(200, 50, 350, 200); // 시작 위치부터 (350, 200)까지 곡선 그리기
ctx.stroke();