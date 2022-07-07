// Button event listeners
const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", createGrid)

// getElementsByClassName does not return an Array, Map or Set (forEach won't work)
const penButton = document.getElementsByClassName('pen')

// so we use Array.from to convert it to an array before calling forEach
Array.from(penButton).forEach(button => button.addEventListener('click', switchPenState))
Array.from(penButton).forEach(button => button.addEventListener('click', toggleButtonState))

function toggleButtonState() {

    Array.from(penButton).forEach(button => button.classList.remove('active'))

    this.classList.add('active')

}

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

            const column = document.createElement("div")
            column.classList.add('column')

            row.append(column);

            column.addEventListener("mouseover", function(e) {

                // If left mouse button is pressed
                if(e.buttons == 1) {

                    let cell = this

                    changeCellColor(cell)

                }
            })
        }

    }

}

function changeCellColor(cell) {

    cell.removeAttribute('style') // reset cell inline styles
    cell.setAttribute('class', 'column') // reset cell classes

    if (penState == 'rainbow') {

        let rainbow = Math.floor(Math.random() * 360)

        cell.style.cssText = `background-color: hsl(${rainbow}, 100%, 50%);`

    } else {

        cell.classList.add(penState)

    }

}


createGrid()



