var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var link = " https://api.funtranslations.com/translate/morse.json"

// https://api.funtranslations.com/translate/morse.json?text=iamazy
 
function translationURL(text){
    return link + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong");
}

function clickHandler() {
    // outputDiv.innerHTML = "translated text " +txtInput.value;   
    var inputText = txtInput.value;  //taking input

    
    // calling server for processing
    fetch(translationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler)