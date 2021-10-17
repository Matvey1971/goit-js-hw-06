var counterValue = 0;

const spanElement = document.querySelector("#value");

const buttonDecreaseElement = document.getElementsByTagName("button")[0];
const buttonIncreaseElement = document.getElementsByTagName("button")[1];

buttonIncreaseElement.addEventListener("click", function (event) {
  counterValue = counterValue + 1;

  spanElement.innerHTML = `${counterValue}`;
});

buttonDecreaseElement.addEventListener("click", function (event) {
  counterValue = counterValue - 1;

  spanElement.innerHTML = `${counterValue}`;
});
