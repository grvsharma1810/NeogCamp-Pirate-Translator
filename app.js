var textInput = document.querySelector("#text-input");
var button = document.querySelector("#btn");
var outputContainer = document.querySelector("#output");

console.log(outputContainer);
console.log(button);
console.log(textInput);

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function constructURL(text){
    return serverURL + "?text=" + text;
}

button.addEventListener("click",() => {
    var inputText = textInput.value;
    console.log(inputText);
    fetch(constructURL(inputText))
        .then(response => response.json())
        .then(response => {
            outputContainer.innerText = response.contents.translated;
        })
        .catch(error => {
            alert("Some Error Occured. Please try after some time")
            console.log(error);
        })
})