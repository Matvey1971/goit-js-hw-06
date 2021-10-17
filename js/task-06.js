const inputElement = document.getElementById("validation-input");

const properAmount = parseInt(inputElement.getAttribute("data-length"));

inputElement.addEventListener("blur", function () {
  const inputText = inputElement.value;

  if (inputText.length === properAmount) {
    inputElement.className = "valid";
  } else {
    inputElement.className = "invalid";
  }
});
