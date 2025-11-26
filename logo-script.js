const logo = document.querySelector(".logo");
const bigbox = document.querySelector(".bigbox");
const title = document.querySelector(".big-title");
let isVisible = true;

logo.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent navigation/reload
  if (isVisible) {
    bigbox.classList.add("hidden");
    title.classList.add("shown");
    //title.style.display = "grid";
    isVisible = false;
  } else {
    bigbox.classList.remove("hidden");
    title.classList.remove("shown");
    isVisible = true;
  }
});
