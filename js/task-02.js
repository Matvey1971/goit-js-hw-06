const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const food = item => {
  const ingredientli = document.createElement('li');
  ingredientli.textContent = item;
  ingredientli.classList.add('elem');
  return ingredientli;
}

const elementFood = ingredients.map(option => 
  food(option),
);

listIngredients.append(...elementFood);