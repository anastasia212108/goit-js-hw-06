const element = {
    nameInput: document.querySelector("#name-input"),
    nameOutput: document.querySelector("#name-output"),
    }
element.nameInput.addEventListener("input", handlerCurrent)
function handlerCurrent(evt) {
    element.nameOutput.textContent = evt.currentTarget.value
    if (element.nameInput.value === "") {
        element.nameOutput.textContent = "Anonimus"
    }
}
