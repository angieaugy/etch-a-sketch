const container = document.querySelector('.container')
const gridValue = 64

for (let i = 0; i < gridValue; i++) {

    const row = document.createElement("div")
    row.classList.add('row')

    container.append(row);

    for (let i = 0; i < gridValue; i++) {

        const column = document.createElement("div")
        column.classList.add('column')

        row.append(column);
    }

}

const slider = document.querySelector('.slider');
const sliderDisplay = document.querySelector('.slideContainer > p')

sliderDisplay.textContent = slider.value

slider.oninput = () => sliderDisplay.textContent = slider.value
