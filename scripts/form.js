const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const dropdown = document.getElementById("product-name");

products.forEach((product) => {
  const selection = document.createElement("option");
  selection.setAttribute("value", product.id);
  selection.innerHTML = `${product.name}`;
  dropdown.appendChild(selection);
});

// const searchSubmission = "form_submitted";
// const currentURL = window.location.href;
// const message = document.querySelector("h1");
// console.log(currentURL.includes(searchSubmission));

// document.addEventListener("DOMContentLoaded", () => {
//   if (currentURL.includes(searchSubmission)) {
//     let counter = parseInt(localStorage.getItem("completed-reviews") || "0", 10);
//     console.log(counter);
//     counter++;
//     let counter_string = counter.toString();
//     localStorage.setItem("completed-reviews", counter_string);
//     message.innerText = "Review Submitted!";
//   } else {
//     message.innerText = "No review made.";
//   }
// });
