// Pen Logic
const penStates = ['eraser', 'red', 'rainbow']
let penState = penStates[1] // red pen state

function switchPenState() {

    switch (this.value) {

        case 'eraser':

            penState = penStates[0]

            break;
        
        case 'red':

            penState = penStates[1]

            break;

        case 'rainbow':
            
            penState = penStates[2]

            break;

    }
}

// Slider variable to control grid size
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slideContainer > p')

sliderValue.textContent = slider.value

slider.oninput = sliderEvents

// Grid creation
function createGrid() {

    let gridSize = slider.value

    const container = document.querySelector('.container')
    
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

// Events to trigger when slider is used
function sliderEvents() {

    createGrid();
    sliderValue.textContent = slider.value
}

function changeCellColor(cell) {

    if(penState == penStates[0]) {

        cell.style.cssText = "background-color: #ffdbfd;"

    } else {

        cell.style.cssText = "background-color: red"

    }
    
}

// Button event listeners
const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", createGrid)

const eraserButton = document.querySelector('.pen')
eraserButton.addEventListener("click", switchPenState)

createGrid()



