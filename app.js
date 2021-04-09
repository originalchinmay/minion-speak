// var userName = prompt("Enter your pseudo name");
// alert("This is working!! " + userName);

//----------------button

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// --------------random test
// console.log(textInput);
// console.log(outputDiv);

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function clickEventHandler() {
  // outputDiv.innerText = "jsjdfsd" + textInput.value;

  //--------------taking input---------------
  var inputText = textInput.value;

  fetch(getTranslationURL(inputText))
  .then((response) => response.json()
  .then((json) => console.log(json))
  );
}

btnTranslate.addEventListener("click", clickEventHandler);
