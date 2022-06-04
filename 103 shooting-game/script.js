let p1Health = 100,
  p2Health = 100,
  p1Game = 0,
  p2Game = 0;

const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
startButton.addEventListener("click", show);
resetButton.addEventListener("click", reset);
resetButtonStyle()

function show() {
  while (p1Health > 0 || p2Health > 0) {
    const max = 5;
    let hit1 = Math.floor(Math.random() * (max + 1));
    let hit2 = Math.floor(Math.random() * (max + 1));
    p1Health -= hit1;
    p2Health -= hit2;
    document.getElementById("p1Health").innerHTML = p1Health;
    document.getElementById("p2Health").innerHTML = p2Health;
    if (p1Health <= 0 || p2Health <= 0) {
      break;
    }
  }
  if (p1Health > p2Health) {
    p1Game++;
  } else {
    p2Game++;
  }

  document.getElementById("p1").innerHTML = p1Game;
  document.getElementById("p2").innerHTML = p2Game;

  if (p1Game === 3) {
    document.getElementById("result").innerHTML = `P1 wins the tournament`;
    buttonStyle();
  } else if (p2Game === 3) {
    document.getElementById("result").innerHTML = `P2 wins the tournament`;
    buttonStyle();
  }

  p1Health = 100;
  p2Health = 100;
}

function reset() {
  resetButtonStyle()
  p1Game = 0;
  p2Game = 0;
  document.getElementById("p1").innerHTML = p1Game;
  document.getElementById("p2").innerHTML = p2Game;
  document.getElementById("p1Health").innerHTML = 100;
  document.getElementById("p2Health").innerHTML = 100;
  document.getElementById("result").innerHTML = `&nbsp`;
}

function buttonStyle() {
  startButton.disabled = true;
  startButton.style.backgroundColor = "#9cd49f";
  startButton.style.cursor = "not-allowed";
  resetButton.disabled = false;
  resetButton.style.backgroundColor = "#5c5c5c";
  resetButton.style.cursor = "default";
}

function resetButtonStyle(){
  startButton.disabled = false;
  startButton.style.backgroundColor = "#4caf50";
  startButton.style.cursor = "default";
  resetButton.disabled = true;
  resetButton.style.backgroundColor = "#bebebe";
  resetButton.style.cursor = "not-allowed";
}