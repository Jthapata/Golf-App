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
    input.addEventListener('change', () => {
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
let totalArray = []
for (i=0; i<4; i++) {
    totalArray.push(document.querySelector(`#player${i+1}Total`))
}
backElementArray.forEach((input) => {
    input.addEventListener('change', () => {
        let value = 0
        for (element of backElementArray) {
            if (element.classList[0] === input.classList[0]) {
                value += Number(element.value)
            }
        }
        let playerClass = String(input.classList[0])
        let playerNumber = playerClass.slice(0,-4)
        let inId = `${playerNumber}FrontIn`
        let inElement = document.getElementById(inId)
        value += Number(inElement.textContent)
        for (item of totalArray) {
            if (item.id.includes(input.classList[0])) {
                item.textContent = value
            }
        }
    })
})