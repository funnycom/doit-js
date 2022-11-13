const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(120, 100, 50, (Math.PI / 180) * 270, (Math.PI / 180) * 90, true); // 반시계 방향
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(200, 100, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false); // 90도부터 270도까지 시계 방향으로 선으로 반원 그리기
ctx.closePath();
ctx.stroke();
