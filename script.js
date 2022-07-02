// Pen Logic
const penStates = ['eraser', 'red', 'rainbow',]
let penState = penStates[1] // default to red

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

    console.log(penState)
}

// Slider variable to control grid size
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slideContainer > p')

sliderValue.textContent = slider.value

slider.oninput = sliderEvents

// Events to trigger when slider is used
function sliderEvents() {

    createGrid();
    sliderValue.textContent = slider.value
    
}

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

function changeCellColor(cell) {

    if(penState == penStates[0]) { // eraser

        cell.style.cssText = "background-color: #ffdbfd;"

    } else if(penState == penStates[2]) { // rainbow

        let rainbow = Math.floor(Math.random() * 360)
        cell.style.cssText = `background-color: hsl(${rainbow}, 100%, 50%);`

    } else { // default to red

        cell.style.cssText = "background-color: red"

    }
    
}

// Button event listeners
const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", createGrid)

// note that .getElementByClassName does not return an Array, Map or Set
const penButton = document.getElementsByClassName('pen')

// so we use Array.from to convert it to an array before calling forEach
Array.from(penButton).forEach(button => button.addEventListener('click', switchPenState))

createGrid()



