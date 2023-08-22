window.addEventListener("DOMContentLoaded", () => {
  saveInputText();
  counterTime();
});

const form = document.getElementById("formId");
function submitForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", submitForm);

const inputNome = document.getElementById("nome");
const inputCognome = document.getElementById("cognome");
const saveButton = document.getElementById("save");
const removeButton = document.getElementById("remove");
const testoInput = document.createElement("h1");

const saveInputText = function () {
  const LastName = localStorage.getItem("Nome e cognome");
  if (LastName) {
    testoInput.innerText = `${LastName}`;
  } else {
    localStorage.setItem("Nome e cognome", inputNome.value + " " + inputCognome.value);
  }
  console.log(LastName);
  console.log(testoInput);
  const textInput = document.getElementById("textInput");
  textInput.appendChild(testoInput);
};
saveButton.onclick = saveInputText;

removeButton.onclick = function () {
  localStorage.removeItem("Nome e cognome");
  testoInput.innerText = ``;
};
let counterValue = 0;
const counterTime = function () {
  counterValue++;
  const p = document.getElementById("counter");
  p.innerText = counterValue;
  console.log(counterValue);
};
setInterval(counterTime, 1000);
