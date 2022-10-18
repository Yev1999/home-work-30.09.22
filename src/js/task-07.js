const input = document.querySelector("input");
const spanID = document.querySelector("#text");
input.addEventListener("input", textSize);

function textSize(event) {
  spanID.style.fontSize = event.currentTarget.value + "px";
}
