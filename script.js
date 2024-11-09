/*
Add a button on the top of the screen that will send the user a popup asking for the number of
squares (max 100) per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

EXTRA CREDIT
randomize square color with each interaction
implement a darkening effect each time the mouse hovers each cell*/

//Create a page with 16x16 grid by using square divs (within a container) and flexbox.

const initGrid = 16;

function createFlex(numElements, elClass, parentEl, flexDirection){
    for (let i = 0; i < numElements; i++) {
	const div = document.createElement('div');
	div.classList.add(`${elClass}`);
	parentEl.appendChild(div);
	parentEl.classList.add(`${flexDirection}-flex`);
    }
    return document.querySelectorAll(`.${elClass}`);
}

function createGrid(numCells) {
    const container = document.querySelector('#container');
    const rows = Array.from(createFlex(numCells, 'row', container, 'vertical'));
    const cells = Array.from(rows, row => createFlex(numCells, 'cell', row, 'horizontal'));

//Set a hover effect so that the cells change color when the mouse hovers on them
    container.addEventListener('mouseover', (e) => e.target.classList.toggle('hoverEff'));
}

createGrid(initGrid);
