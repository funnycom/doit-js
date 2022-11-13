const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

// 캔버스 너비와 높이. toolbar.offsetHeight는 툴바의 높이
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

// 캔버스 위치를 고려해 좌표 계산하기 위해
const canvasOffsetX = canvas.offsetLeft;   // 왼쪽에서 얼마나 떨어졌나
const canvasOffsetY = canvas.offsetTop;    // 위에서 얼마나 떨어졌나

const ctx = canvas.getContext("2d");

let isDrawing = false;     // 드로잉 상태인지 확인
let startX;       // 그리기 시작하는 좌표, x
let startY;       // 그리기 시작하는 좌표, y
let lineWidth = 2;    // 선 굵기 기본 값

// 선 색과 선 굵기를 선택했을 때
toolbar.addEventListener("change", e => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {
    lineWidth = e.target.value;
  }
});

// '지우기' 버튼 누르면 캔버스 지우기
toolbar.addEventListener("click", e => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mousedown" , e => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});