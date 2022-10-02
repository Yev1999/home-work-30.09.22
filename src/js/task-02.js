const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addElenents = () => {
  let newIngredients = [];
  ingredients.map((ingredient) => {
    const liItem = document.createElement("li");
    liItem.innerText = `${ingredient}`;
    liItem.classList.add("item");
    newIngredients.push(liItem);
  });
  const arrayIngredients = document.querySelector("ul#ingredients");
  arrayIngredients.append(...newIngredients);
};
addElenents();
