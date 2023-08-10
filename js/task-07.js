const fontSizeControl = document.querySelector("#font-size-control")
const textSize = document.querySelector("#text")

fontSizeControl.addEventListener("input", changeSize)

function changeSize(evt) {
    const changeFontSize = evt.currentTarget.value;
    textSize.style.fontSize = `${changeFontSize}px`
}