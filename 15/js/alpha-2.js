const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 255, .2)';
ctx.fillRect(50, 50, 60, 50);
ctx.fillStyle = 'rgba(0, 0, 255, .4)';
ctx.fillRect(110, 50, 60, 50);
ctx.fillStyle = 'rgba(0, 0, 255, .6)';
ctx.fillRect(170, 50, 60, 50);
ctx.fillStyle = 'rgb(0, 0, 255, .8)';
ctx.fillRect(230, 50, 60, 50);
ctx.fillStyle = 'rgb(0, 0, 255, 1)';
ctx.fillRect(290, 50, 60, 50);
