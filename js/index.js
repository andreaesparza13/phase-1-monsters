// Create New Monster Form
function newMonsterForm() {
    const form = document.createElement('form')
    form.setAttribute('id', 'monster-form')
    const addName = document.createElement('input')
    const addAge = document.createElement('input')
    const addDescription = document.createElement('input')
    const newMonsterBtn = document.createElement('button')
    newMonsterBtn.textContent = 'Create New Monster'
    form.addEventListener('submit', e => {
        e.preventDefault()

        // Insert POST request
        const newName = e.target[0].value
        const newAge = e.target[1].value
        const newDesc = e.target[2].value
    })
    form.append(addName, addAge, addDescription, newMonsterBtn)
    document.querySelector('#create-monster').append(form)
}

// GET API and display first 50 monsters
function getMonsters() {
    fetch('http://localhost:3000/monsters')
        .then(res => res.json())
        .then(monsters => {
            let i = 0
            while(i < 50){
                displayMonster(monsters[i++])
            }})
}

// Display 1 Monster
function displayMonster(monsterObject) {
    const monsterName = document.createElement('h3')
    monsterName.textContent = monsterObject.name
    const monsterAge = document.createElement('p')
    monsterAge.textContent = monsterObject.age
    const monsterDescription = document.createElement('p')
    monsterDescription.textContent = monsterObject.description
    const monsterId = document.createElement('p')
    monsterId.textContent = monsterObject.id
    document.querySelector('#monster-container').append(monsterName, monsterAge, monsterDescription)
}

// Load next 50 monsters
function next50() {

}

// Function Invocations
newMonsterForm()
getMonsters()