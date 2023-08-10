const numbersCategories = document.querySelectorAll(".item")
console.log(`Numbers of categories: ${numbersCategories.length}`)
numbersCategories.forEach(function (numbersCategories) {
    const category = numbersCategories.firstElementChild.textContent;
    const elem = numbersCategories.lastElementChild.children.length
    console.log(`Category: ${category}
    Elements: ${elem}`)
})

