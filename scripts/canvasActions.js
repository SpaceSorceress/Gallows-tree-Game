const canvas = document.querySelector("canvas");
canvas.style.backgroundColor="white";
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(13, 129, 166)";


const drawFullMan= () =>{
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(38, 38);
  ctx.lineTo(38, 300); //vertical line

  ctx.moveTo(28, 300);
  ctx.lineTo(115, 300); //floor line

  ctx.moveTo(28, 38);
  ctx.lineTo(262, 38); //top line

  ctx.moveTo(133, 38);
  ctx.lineTo(38, 114); //corner

  ctx.moveTo(200, 38);
  ctx.lineTo(200, 76); //rope line

  ctx.stroke();
  ctx.beginPath();
  ctx.arc(200, 95, 19, 0, Math.PI * 2, false); //head

  ctx.moveTo(200, 114);
  ctx.lineTo(200, 190); //body
  ctx.lineTo(170, 230); //left leg

  ctx.moveTo(200, 190);
  ctx.lineTo(230, 230); //right leg

  ctx.moveTo(200, 140);
  ctx.lineTo(220, 160); //right arm

  ctx.moveTo(200, 140);
  ctx.lineTo(180, 160); //left arm
  ctx.stroke();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function writeEngagement() {
  ctx.font = "bold 25px Asul";
  ctx.fillText("MAKE A GUESS", 50, 150);
  ctx.font = "15px Asul";
  ctx.fillText("(using a field above)", 85, 180);
}

function greetThePlayer(){
  clearCanvas();
  ctx.font = "bold 25px Open-Sans";
  ctx.fillText("YOU WON!", 80, 150);
  ctx.fillText("Well done!", 90, 180);
  ctx.font = "20px Roboto";
  ctx.fillText("Maybe one more time?", 55, 220);
  isPlaying = false; 
}
function computerWon(){
  clearCanvas();
  ctx.font = "bold 25px Open-Sans";
  ctx.fillText("Computer won!", 70, 150);
  ctx.fillText("Try again.", 95, 180);
}

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
      ctx.font = "bold 25px Open-Sans";
      ctx.fillText("LAST", 180, 280);
      ctx.fillText("CHANCE", 140, 310);
      break;
    case 0:
      computerWon();
      showWordOnTemplate();
      newGameButton.focus();
      break;
  }
};