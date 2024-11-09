/*

EXTRA CREDIT
randomize square color with each interaction
implement a darkening effect each time the mouse hovers each cell*/



function createFlex(numElements, elClass, parentEl, flexDirection){
    for (let i = 0; i < numElements; i++) {
	const div = document.createElement('div');
	div.classList.add(`${elClass}`);
	parentEl.appendChild(div);
	parentEl.classList.add(`${flexDirection}-flex`);
    }
    return document.querySelectorAll(`.${elClass}`);
}

function createGrid(container, numCells) {
    const rows = Array.from(createFlex(numCells, 'row', container, 'vertical'));
    const cells = Array.from(rows, row => createFlex(numCells, 'cell', row, 'horizontal'));

}

//Set a hover effect so that the cells change color when the mouse hovers on them
function addHoverEff(container){
    container.addEventListener('mouseover', (e) => {
	if (e.target.classList[0] === 'cell') {
	    e.target.classList.toggle('hoverEff');
	}
    });
}

//Add a button that will ask new grid cell number per side (max 100) through a prompt. It should remove the previous grid and generate a new one

function removeGrid() {
    const rows = Array.from(document.querySelectorAll('.row'));
    rows.forEach(row => row.remove());

}

function validateGridNum() {
}

function btnGridCreation(button) {
    gridNum = prompt("How many cells per side? (max 100)");
    removeGrid();
    createGrid(container, gridNum);
}

function btnEvent(){
    const gridBtn = document.querySelector('button');
    gridBtn.addEventListener('click', () => btnGridCreation(this));
}

//Create a page with 16x16 grid by using square divs (within a container) and flexbox.
function pageInit() {
    const container = document.querySelector('#container');
    let gridNum = 16;
    createGrid(container, gridNum);
    addHoverEff(container);
    btnEvent();
}

pageInit();
