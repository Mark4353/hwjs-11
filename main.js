const textTimer = document.querySelector(".timer1");

let minute = 60;

function updateTimer() {
  textTimer.textContent = `Таймер на ${minute} хвилин`;

  if (minute === 30) {
    console.log("Залишилось менше половини часу");
  } else if (minute > 0) {
    minute--;
    setTimeout(updateTimer, 60000);
  }
}

updateTimer();



const textTimer2 = document.querySelector(".timer2");
const restartButton = document.querySelector(".restartButton");


let millisecondsLeft = 30000; 
const interval = 10; 

function updateTimer2(){
  textTimer2.textContent = `Залишилось: ${(millisecondsLeft / 1000).toFixed(2)} секунд`;

  if (millisecondsLeft <= 10000) {
    textTimer2.style.color= "red"

          }

  if (millisecondsLeft > 0) {
    millisecondsLeft -= interval;
    setTimeout(updateTimer2, interval);

  } else {
    textTimer2.textContent = "Час вийшов";
  }

  restartButton.addEventListener("click", ()=> {
    millisecondsLeft = 29000;

}) ;
}

updateTimer2();