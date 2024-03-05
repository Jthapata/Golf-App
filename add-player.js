const newPlayerBtn = document.getElementById('newPlayer')
const newPlayerName = document.getElementById('newPlayerName')
const addPlayer = document.getElementById('addPlayer')
const cancelNewPlayer = document.getElementById('cancelNewPlayer')
const addPlayerModal = document.getElementById('addPlayerModal')
const playersFullModal = document.getElementById('playersFullModal')
const fullPlayersButton = document.getElementById('fullPlayersButton')
const scoreCardFront = document.getElementById('scoreCardFront')
const scoreCardBack = document.getElementById('scoreCardBack')
const overlay = document.getElementById('overlay')

let players = []

function newPlayer(name) {
    let frontDiv = document.createElement('div')
    let backDiv = document.createElement('div')
    frontDiv.id = `${name}Front`
    frontDiv.classList.add('row-md', 'd-flex', 'flex-column', 'flex-md-row')
    backDiv.id = `${name}Back`
    backDiv.classList.add('row-md', 'd-flex', 'flex-column', 'flex-md-row')
    let nameDivFront = document.createElement('div')
    nameDivFront.classList.add('col-md-2', 'p-2', 'border', 'border-light-subtle', 'text-white')
    nameDivFront.textContent = name
    let nameDivBack = document.createElement('div')
    nameDivBack.classList.add('col-md-2', 'p-2', 'border', 'border-light-subtle', 'text-white')
    nameDivBack.textContent = name
    frontDiv.append(nameDivFront)
    backDiv.append(nameDivBack)
    let inDiv = document.createElement('div')
    inDiv.classList.add('col', 'p-2', 'border', 'border-light-subtle', 'text-white')
    backDiv.append(inDiv)
    for (i=0; i<9; i++) {
        let div = document.createElement('div')
        div.classList.add('col', 'p-2', 'border', 'border-light-subtle', 'text-white')
        let inputElement = document.createElement('input')
        inputElement.classList.add('form-control', 'text-center')
        inputElement.type = 'number'
        div.append(inputElement)
        frontDiv.append(div)
    }
    for (i=0; i<9; i++) {
        let div = document.createElement('div')
        div.classList.add('col', 'p-2', 'border', 'border-light-subtle', 'text-white')
        let inputElement = document.createElement('input')
        inputElement.classList.add('form-control', 'text-center')
        inputElement.type = 'number'
        div.append(inputElement)
        backDiv.append(div)
    }
    let outDivFront = document.createElement('div')
    outDivFront.classList.add('col', 'p-2', 'border', 'border-light-subtle', 'text-white')
    frontDiv.append(outDivFront)
    let outDivBack = document.createElement('div')
    outDivBack.classList.add('col', 'p-2', 'border', 'border-light-subtle', 'text-white')
    backDiv.append(outDivBack)
    
    scoreCardFront.append(frontDiv)
    scoreCardBack.append(backDiv)
}

newPlayerBtn.addEventListener('click', () => {
    if (players.length === 4) {
        playersFullModal.className = 'active-display'
    } else {
        addPlayerModal.className = 'active-display'
        newPlayerName.focus()
    }
    overlay.className = 'active-overlay'
})
addPlayer.addEventListener('click', () => {
    let name = newPlayerName.value
    if (name === '') {
        return
    }
    players.push(name)
    newPlayer(name)
    addPlayerModal.className = 'no-display'
    newPlayerName.value = ''
    newPlayerName.blur()
    overlay.className = 'hide-overlay'
})
newPlayerName.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addPlayer.click();
    }
})
cancelNewPlayer.addEventListener('click', () => {
    addPlayerModal.className = 'no-display'
    newPlayerName.value = ''
    newPlayerName.blur()
    overlay.className = 'hide-overlay'
})
fullPlayersButton.addEventListener('click', () => {
    playersFullModal.className = 'no-display'
    overlay.className = 'hide-overlay'
})