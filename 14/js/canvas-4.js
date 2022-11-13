const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

ctx.fillStyle = "rgb(200,0,0)";   // 채우기 색 - 빨강
ctx.storkeStyle = "black";         // 선 색 - 검정
ctx.fillRect(10, 10, 200, 100);  // 빨간색으로 채운 사각형

ctx.strokeRect(10, 10, 200, 100);  // 검정색 선을 가진 사각형

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 120, 100);   // 파란색으로 채운 사각형

ctx.clearRect(70, 80, 80, 45);  // 사각형 지우기