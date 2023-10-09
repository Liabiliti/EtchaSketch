const grandparentContainer = document.querySelector(".container");

grandparentContainer.style.width = "960px";
grandparentContainer.style.height = "960px";
for(let i = 0; i < 16; i++)
{
    const parentContainer = document.createElement("div");
    parentContainer.style.display = 'flex';
    for(let j = 0; j < 16; j++)
    {
        const gridSquares = document.createElement("div");
        gridSquares.style.width = 480/16 + 'px';
        gridSquares.style.height = 480/16 + 'px';
        gridSquares.classList = "grid";
        gridSquares.style.border = 'black solid 1px';
        parentContainer.append(gridSquares);
    }
    grandparentContainer.append(parentContainer);
}

const grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        console.log("Mouse overing");
    });
    grid.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "black";
        console.log("Mouse outing");
    });
});
