let frontElementArray = []
for (i=0; i<4; i++) {
    let elements = document.querySelectorAll(`.player${i+1}Front`)
    for (item of elements) {
        frontElementArray.push(item)
    }
}
let frontOutArray = []
for (i=0; i<4; i++) {
    frontOutArray.push(document.querySelector(`#player${i+1}FrontOut`))
}

frontElementArray.forEach((input) => {
    input.addEventListener('keyup', () => {
        let value = 0
        for (element of frontElementArray) {
            if (element.classList[0] === input.classList[0]) {
                value += Number(element.value)
            }
        }
        for (element of frontOutArray) {
            if (element.id.includes(input.classList[0])) {
                element.textContent = value
                let inId = `${input.classList[0]}In`
                let inElement = document.getElementById(inId)
                inElement.textContent = element.textContent
            }
        }
    })
})

let backElementArray = []
for (i=0; i<4; i++) {
    let elements = document.querySelectorAll(`.player${i+1}Back`)
    for (item of elements) {
        backElementArray.push(item)
    }
}
backElementArray.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        updateTable(event, input)
    })
})

function updateTable(event, input) {
    let parent = event.target.closest(`#${input.classList[0]}`)
    let children = parent.children
    let inElement = children[1]
    let total = children[11]
    let siblings = []
    for (i=2; i<11; i++) {
        siblings.push(children[i])
    }
    let value = 0
    for (sibling of siblings) {
        value += Number(sibling.children[0].value)
    }
    value += Number(inElement.textContent)
    total.textContent = value
}