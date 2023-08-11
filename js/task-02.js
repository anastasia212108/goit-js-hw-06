const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients")

function createItems(array) {
  const arrayIngredients = array.map((item) => {
    const listLi = document.createElement("li");
    listLi.classList.add("item");
    listLi.textContent = item;
  return listLi
  });
  listIngredients.append(...arrayIngredients);

}
createItems(ingredients)
console.log(listIngredients)