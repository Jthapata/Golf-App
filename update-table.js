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
        let inputValue = element.querySelector('input')
        inputValue.addEventListener('change', () => {
            value = inputValue.value
            for (out of frontOutArray) {
                if(out.id.includes(element.parentElement.id)) {
                    // let outValue = Number(out.textContent)
                    // outValue += value
                    // out.textContent = outValue
                    // console.log(out)
                }
            }
        }) 
    }
}