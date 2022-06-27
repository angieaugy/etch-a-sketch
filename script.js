// Slider variable to control grid size
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slideContainer > p')

sliderValue.textContent = slider.value
slider.oninput = sliderEvents

// Grid Creation
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
        }

    }

}

function sliderEvents() {

    createGrid();
    sliderValue.textContent = slider.value
}

createGrid()



