const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

ctx.beginPath();
ctx.moveTo(50, 100);   // 곡선 시작 위치
ctx.quadraticCurveTo(100, 50, 150, 100); 
ctx.quadraticCurveTo(200, 150, 250, 100); 
ctx.quadraticCurveTo(300, 50, 350, 100); 
ctx.stroke();