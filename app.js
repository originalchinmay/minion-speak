// var userName = prompt("Enter your pseudo name");
// alert("This is working!! " + userName);

//----------------button

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

// --------------random test
// console.log(textInput);
// console.log(outputDiv);

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured");
  alert("Something is wrong with server! Try again after sometime")
}

function clickEventHandler() {
  //--------------taking input---------------
  var inputText = textInput.value;

  //--------------calling server for processing---------
  fetch(getTranslationURL(inputText))
  .then((response) => response.json())
  .then((json) => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
  })
  .catch(errorHandler); 
  ;
}

btnTranslate.addEventListener("click", clickEventHandler);
