/*Create a page with 16x16 grid by using square divs and flexbox.
divs should be inserted in the page using javascript and should be inside a container (created
in the html)
set a hover effect so that the cells change color when the mouse hovers on them
Add a button on the top of the screen that will send the user a popup asking for the number of
squares (max 100) per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

EXTRA CREDIT
randomize square color with each interaction
implement a darkening effect each time the mouse hovers each cell*/

const initGrid = 16;
const container = document.querySelector("#container");

for (let i = 0; i < initGrid; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("cell");
    container.appendChild(divRow);
}
