const menuButton = document.querySelector("#ham-menu");
const navList = document.querySelector("ul");

menuButton.addEventListener("click", () => {
   navList.classList.toggle("open");
   menuButton.classList.toggle("active");
});

const temples = [
   {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
   },
   {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
   },
   {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
   },
   {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
   },
   {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
   },
   {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
   },
   {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
   },
   // Add more temple objects here...
   {
      templeName: "Fort Lauderdale Florida",
      location: "Fort Lauderdale, Florida, United States",
      dedicated: "2014, May, 4",
      area: 30500,
      imageUrl:
         "https://www.churchofjesuschrist.org/imgs/a3969831f6ee2fb8dd6d29c099d0ff8d1c8a65b8/full/1920%2C/0/default",
   },
   {
      templeName: "Sao Paulo Brazil",
      location: "Sao Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 59246,
      imageUrl:
         "https://www.churchofjesuschrist.org/imgs/249d5717cea3f67ba627819a9616a53f591fc9d7/full/1920%2C/0/default",
   },
   {
      templeName: "Provo City Center Utah",
      location: "Provo, Utah, United States",
      dedicated: "2016, March, 20",
      area: 4547,
      imageUrl:
         "https://www.churchofjesuschrist.org/imgs/ff8c7df0c3ca5323549b8f87790ec42c0ce18662/full/1920%2C/0/default",
   },
];
createTempleCard(temples);

function createTempleCard(filteredTemples) {
   filteredTemples.forEach((temple) => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");

      templeCard.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><span>Location: </span>${temple.location}</p>
    <p><span>Dedicated: </span>${temple.dedicated}</p>
    <p><span>Size: </span>${temple.area} sq ft</p>
    <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
    `;

      if (typeof temple.dedicated === "string") {
         const templeDateList = temple.dedicated.split(",");
         const yearNumber = parseInt(templeDateList[0]);
         temple.dedicated = yearNumber;
      }
      document.querySelector(".card-container").appendChild(templeCard);
   });
}

const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

//Check for year
const thresholdOld = 1900;
const thresholdNew = 2000;
const container = document.querySelector(".card-container");

oldButton.addEventListener("click", () => {
   container.innerHTML = "";
   createTempleCard(
      temples.filter((temple) => temple.dedicated < thresholdOld)
   );
});

newButton.addEventListener("click", () => {
   container.innerHTML = "";
   createTempleCard(
      temples.filter((temple) => temple.dedicated > thresholdNew)
   );
});

largeButton.addEventListener("click", () => {
   container.innerHTML = "";
   createTempleCard(temples.filter((temple) => temple.area > 90000));
});

smallButton.addEventListener("click", () => {
   container.innerHTML = "";
   createTempleCard(temples.filter((temple) => temple.area < 10000));
});

homeButton.addEventListener("click", () => {
   container.innerHTML = "";
   createTempleCard(temples);
});
