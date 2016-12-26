window.onload = function() {
  // step1. find canvas
  var canvas = document.querySelector("canvas#my-canvas");

  // step2. getContext
  var context = canvas.getContext("2d");

  // step3. start painting

  /* rectangle 填充矩形 */
  // context.fillStyle = "#ff00ff";
  // context.fillRect(50, 25, 100, 50);


  /* 直线 */
  // context.moveTo(0, 0);
  // context.lineTo(50, 50);
  // context.lineTo(0, 100);
  // context.stroke();

  /* 轮廓矩形 */
  // context.strokeStyle = "#ff00ff";
  // context.strokeRect(50, 25, 100, 50);

  /* 圆 */
  context.fillStyle = "#ff00ff";
  context.beginPath();
  context.arc(50, 50, 50, 0, Math.PI*2, true);
  context.closePath();
  // context.fill();
  context.stroke();
}
