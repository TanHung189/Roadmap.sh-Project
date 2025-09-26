let timer;
let seconds = 0;
let isRunning = false;

function updateStopwatch() {
  let hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  let mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let secs = (seconds % 60).toString().padStart(2, "0");
  document.getElementById("clock").textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateStopwatch();
    }, 1000);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateStopwatch();
});
