function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector("body");
const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

function changeBodyColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  color.textContent = bodyColor.style.backgroundColor;
}

changeColor.addEventListener("click", changeBodyColor);
