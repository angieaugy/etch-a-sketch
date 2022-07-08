// Button event listeners
const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", resetGrid)

// getElementsByClassName does not return an Array, Map or Set (forEach won't work)
// so we convert it with Array.from
const penButton = document.getElementsByClassName('pen')
const buttons = Array.from(penButton)

buttons.forEach(button => button.addEventListener('click', switchPenState))
buttons.forEach(button => button.addEventListener('click', toggleButtonState))

function toggleButtonState() {

    buttons.forEach(button => button.classList.remove('active'))

    this.classList.add('active')

}

// Mouse down state
let mouseDown = false

document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}

// Pen Logic
let penState = 'red' // default to red

function switchPenState() {

    if(this.value !== 'clear') {

        penState = this.value

    } 

}

// Slider variable to control grid size
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-container > p')

sliderValue.textContent = `${slider.value} x ${slider.value}`

slider.oninput = sliderEvents

// Events to trigger when slider is used
function sliderEvents() {

    createGrid();
    sliderValue.textContent = `${slider.value} x ${slider.value}`
    
}

// Grid creation
function createGrid() {

    let gridSize = slider.value

    const container = document.querySelector('#grid-container')
    
    container.textContent = ''

    for (let i = 0; i < gridSize; i++) {

        const row = document.createElement("div")
        row.classList.add('row')

        container.append(row);

        for (let i = 0; i < gridSize; i++) {

            const cell = document.createElement("div")
            cell.classList.add('cell')

            row.append(cell);

            cell.addEventListener('mousedown',changeCellColor)
            cell.addEventListener("mouseover",changeCellColor)
        }

    }

}

function resetGrid() {

    const allCells = document.getElementsByClassName('cell')
    const cells = Array.from(allCells)

    cells.forEach(cell => clearClassStyle(cell))

}

function clearClassStyle(cell)  {

    cell.removeAttribute('style')
    cell.setAttribute('class', 'cell')
}

function changeCellColor(e) {

    if (e.type == 'mouseover' && !mouseDown) return;

    clearClassStyle(e.target) // clear styles

    if (penState == 'rainbow') {

        let rainbow = Math.floor(Math.random() * 360)

        e.target.style.cssText = `background-color: hsl(${rainbow}, 100%, 50%);`

    } else {

        e.target.classList.add(penState)

    }

}


createGrid()



