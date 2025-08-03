function getElementById(id) {
  return document.getElementById(id);
}

function setInnerTextById(id, text) {
  document.getElementById(id).innerText = text;
}
function getInnerTextById(id) {
  return document.getElementById(id).innerText;
}
function showElement(id) {
  document.getElementById(id).classList.remove("hidden");
}
function hideElement(id) {
  document.getElementById(id).classList.add("hidden");
}
function generateRandomKey() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alphabets.split("");
  const randomAlphabetIndex = Math.round(Math.random() * 25);
  const randomAlphabet = alphaArr[randomAlphabetIndex];
  return randomAlphabet;
}
function setBackgroundColorById(id) {
  getElementById(id).classList.add("bg-purple-500", "animate-pulse");
}
function removeBackgroundColorById(id) {
  getElementById(id).classList.remove("bg-purple-500", "animate-pulse");
}
