const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 회색 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);

// 마름모 사각형
ctx.translate(150, 150);         // 원점 이동
ctx.rotate(45 * Math.PI / 180);
ctx.strokeRect(0, 0, 100, 100);
ctx.translate(-150, -150);       // 원점 복귀