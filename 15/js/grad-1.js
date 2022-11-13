const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
linGrad.addColorStop(0, "#000");       // 시작 위치에 검정색
linGrad.addColorStop(0.6, "#fff");      // 0.6 위치에 흰색
linGrad.addColorStop(1, "#eee");        // 끝나는 위치에 회색

ctx.fillStyle = linGrad;
ctx.fillRect(0, 0, 100, 200);