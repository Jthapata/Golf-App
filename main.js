var selectedTeeType;
var courseId;

const tees = document.getElementById('tees')
const teeBtns = document.querySelectorAll('#tee')
const courses = document.getElementById('courses')
const courseBtns = document.querySelectorAll('.course')
const newPlayerButton = document.getElementById('newPlayer')
const display = document.getElementById('test')
const yardageElements = document.querySelectorAll('.yardage')
const parElements = document.querySelectorAll('.par')
const handicapElements = document.querySelectorAll('.handicap')
const yardTotal = document.getElementById('yardTotal')
const parTotal = document.getElementById('parTotal')
const hcpTotal = document.getElementById('hcpTotal')
const frontYardOut = document.getElementById('frontYardOut')
const frontParOut = document.getElementById('frontParOut')
const frontHcpOut = document.getElementById('frontHcpOut')
const yardIn = document.getElementById('yardIn')
const parIn = document.getElementById('parIn')
const hcpIn = document.getElementById('hcpIn')
const noTee = document.getElementById('noTee')
const noTeeButton = document.getElementById('noTeeButton')

let yardages = []
let pars = []
let handicaps = []

courseBtns.forEach((button) => {
    button.addEventListener('click', () => {
        courseId = button.id
        courses.innerHTML = `<h3 class="text-center text-white">Course: ${button.textContent}</h3>`
        tees.className = 'row'
        tees.classList.add('justify-content-center', 'vw-100')
    })
})
teeBtns.forEach((button) => {
    button.addEventListener('click', () => {
        selectedTeeType = button.textContent.toLowerCase()
        if (selectedTeeType === 'pro' && courseId === '19002') {
            noTee.className = 'active-display'
            overlay.className = 'active-overlay'
            return
        }
        tees.innerHTML =`<h3 class="text-center text-white">Tee Type: ${button.textContent}</h3>`
        newPlayerButton.className = 'm-2'
        newPlayerButton.classList.add('p-2', 'rounded-pill')
        newPlayerButton.click()
        displayCourseInfo(courseId)
    })
})
noTeeButton.addEventListener('click', () => {
    noTee.className = 'no-display'
    overlay.className = 'hide-overlay'
})

async function displayCourseInfo(id) {
    let url = `https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course${id}.json`
    let response = await fetch(url)
    let data = await response.json()
    for (hole of data.holes) {
        let teeBoxes = hole.teeBoxes
        for (box of teeBoxes) {
            if (box.teeType === selectedTeeType) {
                yardages.push(box.yards)
                pars.push(box.par)
                handicaps.push(box.hcp)
            }
        }
    }
    let totalYard = 0
    let totalPar = 0
    let totalHcp = 0
    let halfYard = 0
    let halfPar = 0
    let halfHcp = 0
    for (i=0; i<18; i++) {
        yardageElements[i].textContent = yardages[i]
        parElements[i].textContent = pars[i]
        handicapElements[i].textContent = handicaps[i]
        totalYard += Number(yardages[i])
        totalPar += Number(pars[i])
        totalHcp += Number(handicaps[i])
    }
    for (i=0; i<9; i++) {
        yardageElements[i].textContent = yardages[i]
        parElements[i].textContent = pars[i]
        handicapElements[i].textContent = handicaps[i]
        halfYard += Number(yardages[i])
        halfPar += Number(pars[i])
        halfHcp += Number(handicaps[i])
    }
    yardTotal.textContent = totalYard
    parTotal.textContent = totalPar
    hcpTotal.textContent = totalHcp
    frontYardOut.textContent = halfYard
    frontParOut.textContent = halfPar
    frontHcpOut.textContent = halfHcp
    yardIn.textContent = halfYard
    parIn.textContent = halfPar
    hcpIn.textContent = halfHcp
}