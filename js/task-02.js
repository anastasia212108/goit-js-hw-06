const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients")
const itemIngredients = []
function createItems(array) {
  array.map ((item) =>{
    const listLi = document.createElement("li");
    listLi.classList.add("item");
    listLi.textContent = item;
    itemIngredients.push(listLi);
  }).join("")
 listIngredients.append(...itemIngredients)
}
createItems(ingredients)
