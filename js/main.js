var encryptionKeys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};
var inputText = document.querySelector("#inputField");
var translateButton = document.querySelector("#tranlate-button");
var outputField = document.querySelector("#ouputField");
var isEncrypted = true;

translateButton.addEventListener("click", function(event){
    event.preventDefault();
    var message = "";

    if(!isEncrypted){
        message = encryptText(encryptionKeys, inputText.value);
    } else{
        message = decryptText(encryptionKeys, inputText.value);
    }

    outputField.value = message;
});

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