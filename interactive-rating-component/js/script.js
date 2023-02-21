const form = document.getElementById("form");
const ratings = document.getElementsByName("stars");
let finalScore = null;

ratings.forEach((el) => {
  el.addEventListener("click", (event) => {
    const currentRating = Number(event.target.getAttribute("value"));
    finalScore = currentRating;

    const labels = document.getElementsByClassName("label");
    for (let i = 0; i < labels.length; i++) {
      if (i < currentRating) {
        labels[i].classList.add("highlight");
      } else {
        labels[i].classList.remove("highlight");
      }
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const rating = document.getElementById("rating");
  const message = document.getElementById("message");

  document.getElementsByClassName(
    "completed__rating"
  )[0].innerText = `You Selected ${finalScore} out of 5`;

  if (!finalScore) {
    alert("Please Select a score before submitting!");
    return;
  }

  rating.classList.add("hidden");
  message.classList.add("visible");
});
