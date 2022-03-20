const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

ctx.beginPath();
ctx.moveTo(50, 100);   // 곡선 시작 위치
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100); 
ctx.strokeStyle = "green";    
ctx.stroke();