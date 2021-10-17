const inputElement = document.getElementById("font-size-control");
const spanElement = document.getElementById("text");

inputElement.addEventListener("input", function () {
  const newFontSize = inputElement.value;

  spanElement.style.fontSize = `${newFontSize}px`;
});
