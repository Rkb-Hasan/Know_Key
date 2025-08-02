let isGanmeOn = false;
const audio = new Audio();

function play() {
  hideElement("home-screen");
  hideElement("score");
  showElement("play-ground");

  //   make the gameplay true
  isGanmeOn = true;
  continueGame();
}
// generate the alphabet
const shownAlpha = generateRandomKey();
console.log(shownAlpha);
function continueGame() {
  //   show it to the board
  setInnerTextById("current-alphabet", shownAlpha);
  //   set the background for selected key
  setBackgroundColorById(shownAlpha);
}

function gameOver() {}

function keyboardHandler(e) {
  const playerPressed = e.key;
  console.log(playerPressed);
  if (playerPressed === "Escape") {
    // gameOver()
    return;
  }
  if (playerPressed === shownAlpha) {
    // make the success sound
    // audio.src = "../audio/success.mp3";  having problem here
    audio.play();
    //
    let currentScore = getInnerTextById("current-score");
    let currentLife = getInnerTextById("current-life");
    console.log(currentLife, currentScore);
    const updatedScore = currentScore + 1;
    const updatedLife = currentLife + 1;
    // update the score
    setInnerTextById("current-score", updatedScore);
    // undate the life
    setInnerTextById("current-life", updatedLife);
  }
}
document.addEventListener("keyup", keyboardHandler);
