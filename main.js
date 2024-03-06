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
const backYardOut = document.getElementById('backYardOut')
const backParOut = document.getElementById('backParOut')
const backHcpOut = document.getElementById('backHcpOut')
const frontYardOut = document.getElementById('frontYardOut')
const frontParOut = document.getElementById('frontParOut')
const frontHcpOut = document.getElementById('frontHcpOut')
const yardIn = document.getElementById('yardIn')
const parIn = document.getElementById('parIn')
const hcpIn = document.getElementById('hcpIn')

let yardages = []
let pars = []
let handicaps = []

teeBtns.forEach((button) => {
    button.addEventListener('click', () => {
        selectedTeeType = button.textContent.toLowerCase()
        tees.innerHTML =`<h3 class="text-center text-white">Tee Type: ${button.textContent}</h3>`
        courses.className = 'row'
        courses.classList.add('justify-content-center')
    })
})
courseBtns.forEach((button) => {
    button.addEventListener('click', () => {
        courseId = button.id
        courses.innerHTML = `<h3 class="text-center text-white">Course: ${button.textContent}</h3>`
        newPlayerButton.className = 'm-2'
        newPlayerButton.classList.add('p-2', 'rounded-pill')
        displayCourseInfo(courseId)
    })
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
    backYardOut.textContent = totalYard
    backParOut.textContent = totalPar
    backHcpOut.textContent = totalHcp
    frontYardOut.textContent = halfYard
    frontParOut.textContent = halfPar
    frontHcpOut.textContent = halfHcp
    yardIn.textContent = halfYard
    parIn.textContent = halfPar
    hcpIn.textContent = halfHcp
}