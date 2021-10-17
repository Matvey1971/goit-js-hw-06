function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonElement = document.querySelector(".change-color");
const spanElement = document.querySelector(".color");

buttonElement.addEventListener("click", function () {
  let newColor = getRandomHexColor();

  document.body.style = `background-color: ${newColor}`;

  spanElement.textContent = newColor;
});
