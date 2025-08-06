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
    document.querySelector(".card-container").appendChild(characterCard);
  });
}
