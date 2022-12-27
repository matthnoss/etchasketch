const mainDiv = document.getElementById('mainDiv');
const button = document.getElementById('gridBtn');

function createGrid(gridValue) {
    let pixelSize = mainDiv.clientWidth / gridValue;
    let columnHeight = screen.height / gridValue
    for(let i = 0; i < gridValue; i++){
        let columnDiv = document.createElement('div');
        columnDiv.style.height = `${columnHeight}px`;
        columnDiv.classList.add('mainerDiv');
        for(let i = 0; i < gridValue; i++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('divs');
            newDiv.style.width = `${pixelSize}px`;
            newDiv.style.height = `${columnHeight}px`;
            columnDiv.appendChild(newDiv);
        }
        mainDiv.appendChild(columnDiv);
    }
    document.querySelectorAll('.divs').forEach(item => item.addEventListener('mouseover', changeColor));
}

function changeColor() {
    this.style.backgroundColor = 'red';
}

button.addEventListener('click', () => {
    let gridSize = prompt('Enter new grid size');
    gridSize = parseInt(gridSize);
    if(gridSize < 1 || gridSize > 100) {
        alert("Grid size cannot be less than one or over one hundred.");
    }
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.lastChild);
    }
    createGrid(gridSize);
})
