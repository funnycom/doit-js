const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 회색 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);

ctx.rotate(45 * Math.PI / 180); // 45도 회전
ctx.strokeRect(150, 150, 100, 100);  // 선으로 그리기