function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const crtBtn = document.querySelector("[data-create]");
const clrBtn = document.querySelector("[data-destroy]");
const parrent = document.querySelector("#boxes");

crtBtn.addEventListener("click", () => createBoxes(input.value));
clrBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  parrent.innerHTML = "";
}

function createBoxes(amount) {
  let size = 20;

  for (let i = 0; i < amount; i++) {
    size += +10;
    const newEl = `<div style="width:${size}px;height:${size}px;background:${getRandomHexColor()};"></div>`;

    parrent.insertAdjacentHTML("beforeEnd", newEl);
  }
}
