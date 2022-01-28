var copyBtn = document.querySelector(".copyBtn");

copyBtn.addEventListener("click", function(event){
    var outputField = document.querySelector("#outputField");
    outputField.focus();
    outputField.select();

    try {
        var toCopy = document.execCommand('copy');
        var msg = toCopy ? 'successful' : 'unsuccessful';
        console.log(msg);
    } catch (error) {
        console.log(error);        
    }
});