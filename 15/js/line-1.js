const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const lineCap = ['butt', 'round', 'square'];

ctx.strokeStyle = '#222';
for(let i = 0; i < lineCap.length; i++) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[i];
  ctx.beginPath();
  ctx.moveTo(50, 50 + i * 30);    // 시작 위치
  ctx.lineTo(350, 50 + i * 30);   // 끝 위치
  ctx.stroke();
} 