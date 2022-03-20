const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.font = "60px Arial";
ctx.fillText("HELLO", 50, 70);
ctx.strokeText("HELLO", 50, 150);