const mainDiv = document.getElementById('mainDiv');


for(let i = 0; i < 16; i++){
    let columnDiv = document.createElement('div');
    columnDiv.classList.add('mainerDiv');
    for(let i = 0; i < 16; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('divs');
        columnDiv.appendChild(newDiv);
    }
    mainDiv.appendChild(columnDiv);
}

document.querySelectorAll('.divs').forEach(item => item.addEventListener('mouseover', changeColor))


function changeColor() {
    this.style.backgroundColor = 'red';
}
