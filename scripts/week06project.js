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

//Make it objects ["Fighter", "Wizard", "Rogue", "Ranger", "Bard"];
const characters = [
  {
    class: "Fighter",
    primaryStat: "Strength",
    secondaryStat: "Constitution",
    hitDie: "D10",
    // imageURL:
  },
  {
    class: "Wizard",
    primaryStat: "Intelligence",
    secondaryStat: "Wisdom",
    hitDie: "D6",
    // imageURL:
  },
  {
    class: "Rogue",
    primaryStat: "Dexterity",
    secondaryStat: "Intelligence",
    hitDie: "D8",
    // imageURL:
  },
  {
    class: "Ranger",
    primaryStat: "Dexterity",
    secondaryStat: "Wisdom",
    hitDie: "D10",
    // imageURL:
  },
  {
    class: "Bard",
    primaryStat: "Charisma",
    secondaryStat: "Dexterity",
    hitDie: "D8",
    // imageURL:
  },
];

createCharacterCard(characters);

function createCharacterCard(characterList) {
  characterList.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");

    characterCard.innerHTML = `
    <h2>${character.class}</h2>
    <p><span>Stats: </span>${character.primaryStat}, ${character.secondaryStat}</p>
    <p><span>HitDie: </span>${character.hitDie}</p> 
    `;
    document.querySelector(".card-container").appendChild(templeCard);
  });
}
