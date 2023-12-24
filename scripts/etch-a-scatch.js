const squaresContainer = document.querySelector('.squares-container');

const createGrid = size => {
    const MAX_WIDTH = 958;



    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            squareDiv.style.width = `${(MAX_WIDTH / size)}px`;
            squareDiv.style.height = `${(MAX_WIDTH / size)}px`;
            squareDiv.dataset.interactionsCount = 0;
            squaresContainer.appendChild(squareDiv);
            squareDiv.addEventListener('mouseover', handleMouseOver);
        }
    }
}

const handleMouseOver = event => {
    const currentColor = event.target.style.backgroundColor || getRandomColor();
    const interactionsCount = parseInt(event.target.dataset.interactionsCount);
    if (interactionsCount < 10) {
        const darkenedColor = darkenColor(currentColor, 0.1);
        event.target.style.backgroundColor = darkenedColor;
        event.target.dataset.interactionsCount = interactionsCount + 1;
    }
}

const darkenColor = (color, factor) => {

    const rgbValues = color.match(/\d+/g).map(Number);
    const darkenedValues = rgbValues.map(value => Math.max(value - Math.floor(value * factor), 0));
    return `rgb(${darkenedValues.join(', ')})`;
}

const getRandomColor = () => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

const resetGrid = () => {
    let  newSize = prompt("Enter a new grid size");
    if (newSize === null || newSize === '') {
        newSize = 16;
    };
    if (newSize < 1 || newSize > 100 || (typeof newSize !== 'number' && isNaN(newSize))) return alert("Please enter a number between 1 and 100");


    squaresContainer.innerHTML = '';
    createGrid(newSize);
}

// Initial grid creation
createGrid(16);