const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');

ingredients.forEach(option => {
  const ingredientli = document.createElement('li');
  ingredientli.textContent = option;
  ingredientli.classList.add('item');
  listIngredients.append(ingredientli);
});
console.log(ingredients);
console.log(listIngredients);