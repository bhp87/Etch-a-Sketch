const squaresContainer = document.querySelector('.squares-container');

const createGrid = size => {
    const MAX_WIDTH = 958;



    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            squareDiv.style.width = `${(MAX_WIDTH / size) }px`;
            squareDiv.style.height = `${(MAX_WIDTH / size)}px`;
            squaresContainer.appendChild(squareDiv);
        }
    }

    const gridItems = document.querySelectorAll('.square');
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', handleMouseOver);
    });
}

const handleMouseOver = event => {
    // Add the "hovered" class to change the background color on hover
    event.target.classList.add('hovered');
}

const resetGrid = () => {
    const newSize = prompt("Enter a new grid size");
    if (newSize === null || newSize === '') return;
    if (newSize < 1 || newSize > 100) return alert("Please enter a number between 1 and 100");


    squaresContainer.innerHTML = '';
    createGrid(newSize);
}

// Initial grid creation
createGrid(16);