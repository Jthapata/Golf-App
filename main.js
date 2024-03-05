let mainContent = document.getElementById('main-content')

async function getCourseInfo() {
    let url = "https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/courses.json"
    let response = await fetch(url)
    let data = await response.json()
    mainContent.append(JSON.stringify(data))
}
getCourseInfo()