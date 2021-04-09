// var userName = prompt("Enter your pseudo name");
// alert("This is working!! " + userName);

//----------------button

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");

console.log(textInput);

function clickEventHandler() {
  console.log("clicked!");
  console.log("input", textInput.value);
}

btnTranslate.addEventListener("click", clickEventHandler);
