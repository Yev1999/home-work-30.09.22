// 1) Порахує і виведе в консоль кількість категорій в
// ul#categories, тобто елементів li.item.

const resultCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${resultCategories.length}`);

[...resultCategories].map((tag) => {
  const currentCategory = tag;
  const h2 = currentCategory.querySelector("h2").textContent;
  console.log(`Category: ${h2}`);
  const resultElements = currentCategory.querySelectorAll("li").length;
  console.log(`Elements: ${resultElements}`);
});
