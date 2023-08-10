const elem = {
    buttDecrement: document.querySelector('button[data-action="decrement"]'),
    buttIncrement: document.querySelector('button[data-action="increment"]'),
span: document.querySelector("#value"),
}
let counterValue = 0;
elem.buttDecrement.addEventListener("click", decrement)

function decrement() {
    counterValue -= 1
    elem.span.textContent = counterValue
} 
elem.buttIncrement.addEventListener("click", increment)
function increment() {
    counterValue += 1
    elem.span.textContent = counterValue
}