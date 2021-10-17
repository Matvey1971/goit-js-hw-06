const formElement = document.getElementsByClassName("login-form")[0];

const inputEmail = formElement.elements[0];
const inputPass = formElement.elements[1];

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const textEmail = inputEmail.value;
  const textPassword = inputPass.value;

  if (textEmail.length === 0 || textPassword === 0) {
    alert("Все поля должны быть заполнены");
  } else {
    const outputObject = {
      [inputEmail.name]: textEmail,
      [inputPass.name]: textPassword,
    };

    console.log("📝 outputObject", outputObject);

    return formElement.reset();
  }
});
