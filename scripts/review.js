//Check if reviews page was loaded from form submission
const searchSubmission = "form_submitted";
const currentURL = window.location.href;
const message = document.querySelector("h1");
console.log(currentURL.includes(searchSubmission));

document.addEventListener("DOMContentLoaded", () => {
  if (currentURL.includes(searchSubmission)) {
    let counter = parseInt(localStorage.getItem("completed-reviews" || "0"));
    counter++;
    localStorage.setItem("completed-reviews", counter);
    message.innerText = "Review Submitted!";
  } else {
    message.innerText = "No review made.";
  }
});
