const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.decrement.addEventListener("click", decrementFunction);
refs.increment.addEventListener("click", incrementFunction);

let counterValue = 0;

function decrementFunction() {
  counterValue -= 1;
  refs.value.innerHTML = `${counterValue}`;
}

function incrementFunction() {
  counterValue += 1;
  refs.value.innerHTML = `${counterValue}`;
}
