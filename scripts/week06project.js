const menuButton = document.querySelector("#ham-menu");
const navList = document.querySelector("ul");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("open");
  menuButton.classList.toggle("active");
});

const diceButton = document.getElementById("dice-click");
const diceText = document.getElementById("result");
const resultText = document.getElementById("extreme");

diceButton.addEventListener("click", () => {
  var diceRoll = Math.floor(Math.random() * 20 + 1);
  diceText.textContent = diceRoll;

  // if (diceRoll == 20) {
  //   resultText.textContent = "Perfect Success!";
  // } else if (diceRoll == 1) {
  //   resultText.textContent = "Critical Failure!";
  // } else {
  //   resultText.textContent = ".";
  // }
});
