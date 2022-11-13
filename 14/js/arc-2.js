const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true); // 반시계 방향
ctx.arc(280, 100, 50, 0, (Math.PI / 180) * 180, false); // 시계 방향
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false); // 90도부터 270도까지 시계 방향으로 선으로 반원 그리기
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.moveTo(200, 100);
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false); // 0도부터 60도까지 시계방향을 선으로 호 그리기
ctx.stroke();
