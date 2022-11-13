const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // 경로를 시작합니다.
ctx.moveTo(50, 50); // 시작점을 (50,50) 위치로 이동시킵니다.
ctx.lineTo(150, 100); // 시작점에서 (150, 100)까지 경로를 만듭니다.
ctx.lineTo(50, 150); // 앞서 그린 경로 끝점에서 (50,150)까지 경로를 만듭니다.
ctx.closePath(); // 경로를 닫습니다. (닫힌 도형)
ctx.stroke(); // 지금까지 만든 경로를 선으로 그립니다.

ctx.beginPath(); // 경로를 시작합니다.
ctx.moveTo(150, 100); // 시작점을 (150, 100) 위치로 이동시킵니다.
ctx.lineTo(250, 50); // 시작점에서 (250, 50)까지 직선을 만듭니다.
ctx.lineTo(250, 150); // 시작점에서 (250, 150)까지 직선을 만듭니다.
ctx.closePath(); // 경로를 닫습니다. (닫힌 도형)
ctx.fillStyle = "rgb(0, 200, 0)"; // 채우기 색을 rgb(0,200,0)으로 지정합니다.
ctx.fill(); // 만들어진 (닫힌) 도형에 색을 채웁니다.
ctx.stroke();
