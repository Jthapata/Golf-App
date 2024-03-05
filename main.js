var teeType;
var courseId;

const tees = document.getElementById('tees')
const teeBtns = document.querySelectorAll('#tee')
const courses = document.getElementById('courses')
const courseBtns = document.querySelectorAll('.course')
const newPlayerButton = document.getElementById('newPlayer')
const mainContent = document.getElementById('main-content')

teeBtns.forEach((button) => {
    button.addEventListener('click', () => {
        teeType = button.textContent.toLowerCase()
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
    mainContent.append(JSON.stringify(data.holes[0]))
}