let isGameOn = false;
const audio = new Audio();

function play() {
  hideElement("home-screen");
  hideElement("score");
  showElement("play-ground");

  // reset score and life for new round
  setInnerTextById("current-life", 5);
  setInnerTextById("current-score", 0);

  // reset the background of art-board
  getElementById(
    "art-board"
  ).style.background = `linear-gradient(#fef6ff 100%,red)`;
  getElementById("art-board").style.backgroundClip = `text`;
  //   make the gameplay true
  isGameOn = true;

  // continue to game
  continueGame();
}

function continueGame() {
  // generate the alphabet
  const shownAlpha = generateRandomKey();

  //   show it to the board
  setInnerTextById("current-alphabet", shownAlpha);

  //   set the background for selected key
  setBackgroundColorById(shownAlpha);
}

function gameOver() {
  hideElement("home-screen");
  hideElement("play-ground");
  showElement("score");

  // set the final score
  const finalScore = getInnerTextById("current-score");
  setInnerTextById("final-score", finalScore);

  // reset the background of art-board
  getElementById(
    "art-board"
  ).style.background = `linear-gradient(#fef6ff 100%,red)`;
  getElementById("art-board").style.backgroundClip = `text`;
  // remove the background of previuos alpha
  const currAlpha = getInnerTextById("current-alphabet").toLowerCase();
  removeBackgroundColorById(currAlpha);

  // update game status
  isGameOn = false;
}

function keyboardHandler(e) {
  const playerPressed = e.key;
  const artBoard = getElementById("art-board");
  let currentScore = getInnerTextById("current-score");
  let currentLife = getInnerTextById("current-life");
  let updatedScore;
  let updatedLife;

  const shownAlpha = getInnerTextById("current-alphabet");

  if (playerPressed === "Escape") {
    gameOver();
  }

  if (playerPressed === shownAlpha.toLowerCase()) {
    // make the success sound
    audio.src = "/audio/success.mp3";
    audio.play();

    // update the score
    updatedScore = Number(currentScore) + 1;
    setInnerTextById("current-score", updatedScore);

    removeBackgroundColorById(playerPressed);
    // continue the game
    continueGame();
  } else {
    // make tha fail sound
    audio.src = "/audio/invalid.mp3";
    audio.play();

    // update the life
    if (Number(currentLife) > 0) {
      // undate the life if greater than 0
      updatedLife = Number(currentLife) - 1;
      setInnerTextById("current-life", updatedLife);

      // get the updated life as percent
      const updatedLifePercentage = (updatedLife / 5) * 100;

      // set the percent as gradient
      artBoard.style.background = `linear-gradient(#fef6ff ${updatedLifePercentage}%,red)`;
      getElementById("art-board").style.backgroundClip = `text`;
    } else {
      // if life is 0
      gameOver();
    }
  }
}
document.addEventListener("keyup", keyboardHandler);
