const characters = [
  {
    class: "Fighter",
    primaryStat: "Strength",
    secondaryStat: "Constitution",
    hitDie: "D10",
    imageURL: "images/fighter.webp",
  },
  {
    class: "Wizard",
    primaryStat: "Intelligence",
    secondaryStat: "Wisdom",
    hitDie: "D6",
    imageURL: "images/wizard.webp",
  },
  {
    class: "Rogue",
    primaryStat: "Dexterity",
    secondaryStat: "Intelligence",
    hitDie: "D8",
    imageURL: "images/rogue.webp",
  },
  {
    class: "Ranger",
    primaryStat: "Dexterity",
    secondaryStat: "Wisdom",
    hitDie: "D10",
    imageURL: "images/ranger.webp",
  },
  {
    class: "Bard",
    primaryStat: "Charisma",
    secondaryStat: "Dexterity",
    hitDie: "D8",
    imageURL: "images/bard.webp",
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
    <img loading="lazy" src="${character.imageURL}" alt="Fantasy ${character.class}">
    `;
    console.log(character.imageURL);
    document.querySelector(".card-container").appendChild(characterCard);
  });
}
