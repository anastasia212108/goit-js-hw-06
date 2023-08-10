function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgrColor = document.querySelector(".color")
const btnColor = document.querySelector(".change-color")
const body = document.querySelector("body")

btnColor.addEventListener("click",colorChange)
function colorChange () {
  body.style.backgroundColor = getRandomHexColor();
  backgrColor.textContent = getRandomHexColor();
}