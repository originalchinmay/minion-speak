// var userName = prompt("Enter your pseudo name");
// alert("This is working!! " + userName);

//----------------button

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(textInput);
console.log(outputDiv);

function clickEventHandler() {
  outputDiv.innerText = "jsjdfsd" + textInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);
