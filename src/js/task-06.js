const input = document.querySelector("input");
const dataLength = input.dataset.length;

input.addEventListener("blur", examination);

function examination(event) {
  const value = event.currentTarget.value;
  if (value.length == dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
