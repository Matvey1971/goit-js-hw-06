const inputElement = document.getElementById("name-input");
const spanElement = document.getElementById("name-output");

inputElement.addEventListener("input", function (event) {
  const inputText = inputElement.value;
  let outputText = "";

  if (inputText.length === 0) {
    outputText = "Anonymous";
  } else {
    outputText = inputText;
  }

  spanElement.innerHTML = outputText;
});
