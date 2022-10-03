const refs = {
  nameInput: document.querySelector("#name-input"),
  headName: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", textGeneration);

function textGeneration(event) {
  refs.headName.innerHTML = event.target.value;
  if (refs.headName.innerHTML === "") {
    refs.headName.innerHTML = "Anonymous";
  }
}
