var encryptionKeys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};
var inputText = document.querySelector("#inputField");
var translateButton = document.querySelector("#translate-button");
var outputField = document.querySelector("#outputField");

var encryptField = document.querySelector("#encrypt");
var decryptField = document.querySelector("#decrypt");
setStyle(encryptField, decryptField, 'rgb(89, 255, 47)', 'black',
                'rgba(0, 0, 0, 0)', 'rgb(89, 255, 47)');

encryptField.addEventListener("click", function(){
    setStyle(encryptField, decryptField, 'rgb(89, 255, 47)', 'black',
                'rgba(0, 0, 0, 0)', 'rgb(89, 255, 47)');
});

decryptField.addEventListener("click", function(){
    setStyle(decryptField, encryptField, 'rgb(89, 255, 47)', 'black',
                'rgba(0, 0, 0, 0)', 'rgb(89, 255, 47)');   
});

translateButton.addEventListener("click", function(event){
    event.preventDefault();
    var toEncrypt = (encryptField.style.color == 'black');
    var message = "";

    if(toEncrypt){
        message = encryptText(encryptionKeys, inputText.value);
    } else{
        message = decryptText(encryptionKeys, inputText.value);
    }

    outputField.value = message;
});

function setStyle(element1, element2, backgroundColor1, color1, 
    backgroundColor2, color2){
    element1.style.backgroundColor = backgroundColor1;
    element1.style.color = color1;
    element2.style.backgroundColor = backgroundColor2;
    element2.style.color = color2;
}

function encryptText(encryptionKeys, text){
    for(var key in encryptionKeys){
        var re = new RegExp(key, "g");
        text = text.replace(re, encryptionKeys[key]);
    }

    return text;
}

function decryptText(encryptionKeys, text){
    for(var key in encryptionKeys){
        var re = new RegExp(encryptionKeys[key], "g");
        text = text.replace(re, key);
    }  

    return text;
}