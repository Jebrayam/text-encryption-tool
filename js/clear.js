var clearBtn = document.querySelector(".clearBtn");


clearBtn.addEventListener("click", function(event){
    event.preventDefault();

    var inputField = document.querySelector("#inputField");
    var outputField = document.querySelector("#outputField");
    
    inputField.value = "";
    outputField.value = "";
});