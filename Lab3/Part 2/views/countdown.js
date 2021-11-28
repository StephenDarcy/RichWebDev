const { fromEvent, interval, timer, take } = require("rxjs");

let startButton = document.getElementById("start-button");
let timerDisplay = document.getElementById("timer");

fromEvent(startButton, "click").subscribe(() => {
  let hours = document.getElementById("hours").value * 3600 || 0;
  let minutes = document.getElementById("minutes").value * 60 || 0;
  let seconds = document.getElementById("seconds").value || 0;

  //get total number of seconds
  let secondsTotal = parseInt(seconds) + parseInt(minutes) + parseInt(hours);
  countdown(secondsTotal);
});

function countdown(seconds) {
  console.log(seconds);
  const interval$ = interval(1000);
  const timer$ = timer(seconds * 100);
  const count$ = interval$.pipe(take(seconds));
  count$.subscribe((time) => {
    timerDisplay.innerHTML = convertToHMS(seconds - (time + 1));
  });
}

function convertToHMS(seconds) {
  var hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * (60 * 60);
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  return (0 < hours ? hours + ":" : "") + minutes + ":" + seconds;
}
