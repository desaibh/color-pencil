function buildCanvas() {

var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
var drawing = false;
var lastX = 0;
var lastY = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#000000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

function draw(e) {
  if (!drawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
}

canvas.addEventListener('mousedown', function (e) {
  drawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function () { drawing = false; });
canvas.addEventListener('mouseout', function () { drawing = false; });

};

buildCanvas();
