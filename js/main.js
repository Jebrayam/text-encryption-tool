var encryptionKeys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

var myText = "Hello world";
console.log(encryptText(encryptionKeys, myText));

var myText2 = "Henterllober woberrld";
console.log(decryptText(encryptionKeys, myText2));

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