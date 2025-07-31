//Check if reviews page was loaded from form submission
const searchSubmission = "form_submitted";
const currentURL = window.location.href;
const message = document.querySelector("h1");
console.log(currentURL.includes(searchSubmission));

document.addEventListener("DOMContentLoaded", () => {
  if (currentURL.includes(searchSubmission)) {
    let counter = parseInt(localStorage.getItem("completed-reviews") || "0", 10);
    console.log(counter);
    counter++;
    let counter_string = counter.toString();
    localStorage.setItem("completed-reviews", counter_string);
    message.innerText = "Review Submitted!";
  } else {
    message.innerText = "No review made.";
  }
});
