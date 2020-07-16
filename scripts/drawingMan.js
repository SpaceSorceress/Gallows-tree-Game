const drawingMan = function (counter) {
    switch (counter) {
      case 11:
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(38, 38);
        ctx.lineTo(38, 300); //vertical line
        ctx.stroke();
        break;
      case 10:
        ctx.beginPath();
        ctx.moveTo(28, 300);
        ctx.lineTo(115, 300); //floor line
        ctx.stroke();
        break;
      case 9:
        ctx.beginPath();
        ctx.moveTo(28, 38);
        ctx.lineTo(262, 38); //top line
        ctx.stroke();
        break;
      case 8:
        ctx.beginPath();
        ctx.moveTo(133, 38);
        ctx.lineTo(38, 114); //corner
        ctx.stroke();
        break;
      case 7:
        ctx.beginPath();
        ctx.moveTo(200, 38);
        ctx.lineTo(200, 76); //rope line
        ctx.stroke();
        break;
      case 6:
        ctx.beginPath();
        ctx.arc(200, 95, 19, 0, Math.PI * 2, false); //head
        ctx.stroke();
        break;
      case 5:
        ctx.beginPath();
        ctx.moveTo(200, 114);
        ctx.lineTo(200, 190); //body
        ctx.stroke();
        break;
      case 4:
        ctx.beginPath();
        ctx.moveTo(200, 190);
        ctx.lineTo(170, 230); //left leg
        ctx.stroke();
        break;
      case 3:
        ctx.beginPath();
        ctx.moveTo(200, 190);
        ctx.lineTo(230, 230); //right leg
        ctx.stroke();
        break;
      case 2:
        ctx.beginPath();
        ctx.moveTo(200, 140);
        ctx.lineTo(220, 160); //right arm
        ctx.stroke();
        break;
      case 1:
        ctx.beginPath();
        ctx.moveTo(200, 140);
        ctx.lineTo(180, 160); //left arm
        ctx.stroke();
        break;
      case 0:
        clearCanvas();
        setGradient();
        ctx.fillText("Computer won!", 50, 150);
        ctx.fillText("Try again.", 50, 200);
        showWordOnTemplate();
        break;
    }
  }