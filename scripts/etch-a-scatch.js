const squaresContainer = document.querySelector('.squares-container');

const createGrid = size => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
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
    const size = 16;
    squaresContainer.innerHTML = '';

    createGrid(size);
}

// Initial grid creation
createGrid(16);