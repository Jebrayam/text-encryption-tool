var encryptField = document.querySelector("#encrypt");
var decryptField = document.querySelector("#decrypt");

encryptField.addEventListener("click", function(){
    encryptField.style.backgroundColor =  'rgb(89, 255, 47)';
    encryptField.style.color = "black";
    decryptField.style.backgroundColor =  'rgba(0, 0, 0, 0)';
    decryptField.style.color = 'rgb(89, 255, 47)';

});

decryptField.addEventListener("click", function(){
    decryptField.style.backgroundColor =  'rgb(89, 255, 47)';
    decryptField.style.color = "black";
    encryptField.style.backgroundColor =  'rgba(0, 0, 0, 0)';
    encryptField.style.color = 'rgb(89, 255, 47)';
 
});

encryptField.style.backgroundColor =  'rgb(89, 255, 47)';
    encryptField.style.color = "black";
    decryptField.style.backgroundColor =  'rgba(0, 0, 0, 0)';
    decryptField.style.color = 'rgb(89, 255, 47)';