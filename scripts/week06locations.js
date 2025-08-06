const searchSubmission = "form_submitted";
const currentURL = window.location.href;
const message = document.querySelector("h1");
console.log(currentURL.includes(searchSubmission));

document.addEventListener("DOMContentLoaded", () => {
  if (currentURL.includes(searchSubmission)) {
    let counter = parseInt(localStorage.getItem("locations-submitted") || "0", 10);
    console.log(counter);
    counter++;
    let counter_string = counter.toString();
    localStorage.setItem("locations-submitted", counter_string);
  }
});
