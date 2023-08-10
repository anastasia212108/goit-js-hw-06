const validInput = document.querySelector("#validation-input")
validInput.addEventListener("blur", handlerChange)

function handlerChange(evt) {
    if (evt.currentTarget.value.length === Number(validInput.dataset.length)) {
        validInput.classList.add("valid")
        validInput.classList.remove("invalid");
    } else {
          validInput.classList.add("invalid")
        validInput.classList.remove("valid");  
    }
}