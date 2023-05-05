const board = document.querySelector('#board');

const SQUARES_NUMBER = 1708;

const colors = ['#e74c3c', '#FA8072', '#8e44ad', '#7B68EE', '#20B2AA', '#FFFACD', '#3498db', '#F0FFF0', '#e67e22', '#FFDEAD', '#00FF7F', '#2ecc71'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
};

function setColor (event) {
    const element = event.target;
    const color = getColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`;
}

function removeColor (event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getColor () {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}