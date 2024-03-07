let frontElementArray = []
for (i=0; i<4; i++) {
    frontElementArray.push(document.querySelectorAll(`.player${i+1}Front`))
}
let frontOutArray = []
for (i=0; i<4; i++) {
    frontOutArray.push(document.querySelector(`#player${i+1}FrontOut`))
}

for (elements of frontElementArray) {
    for (element of elements) {
        let inputElement = element.querySelector('input')
        inputElement.addEventListener('change', () => {
            value = inputElement.value
            for (out of frontOutArray) {
                if(out.id.includes(element.classList[0])) {
                    let outValue = Number(out.textContent)
                    outValue += value
                    out.textContent = outValue
                    console.log(out)
                    console.log(element)
                }
            }
        })
    }
}