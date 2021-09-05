var second = 0;
var milSecond = 0;
var spanSec = document.getElementById("sec");
var spanMilSec = document.getElementById("milSec");
var interval;

function btnStart() {
  clearInterval(interval);
  interval = setInterval(timer, 10);
}

function btnStop() {
  clearInterval(interval);
}

function btnReset() {
  clearInterval(interval);
  second = "00";
  milSecond = "00";
  spanSec.innerHTML = second;
  spanMilSec.innerHTML = milSecond;
}

function timer() {
  milSecond++;

  spanMilSec.innerHTML = String(milSecond).padStart(2, "0");

  if (milSecond > 99) {
    second++;
    spanSec.innerHTML = String(second).padStart(2, "0");
    milSecond = "00";
    spanMilSec.innerHTML = milSecond;
  }
  
  if (second > 9) {
    spanSec.innerHTML = second;
  }
}
