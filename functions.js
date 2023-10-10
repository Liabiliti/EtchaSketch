const grandparentContainer = document.querySelector(".container");
const slider = document.querySelector("#grids");
const value = document.querySelector(".gridValue");
const popupButton = document.querySelector(".popup");
const submit = document.querySelector(".submit");


popupButton.addEventListener("click", function () {
    var popup = document.querySelector(".popupContainer");
    popup.classList.toggle("show");
    grandparentContainer.classList.toggle("show");
    if (popup.classList.contains("show")) {
        popupButton.textContent = "Keep Grid";
    }
    else {
        popupButton.textContent = "New Grid";
    }
})

slider.addEventListener("click", function () {
    value.textContent = slider.value;
})

grandparentContainer.style.width = "480px";
grandparentContainer.style.height = "480px";

let squares = 100;



function getGrid(squares) {
    for (let i = 0; i < squares; i++) {
        const parentContainer = document.createElement("div");
        parentContainer.style.display = 'flex';
        for (let j = 0; j < squares; j++) {
            const gridSquares = document.createElement("div");
            gridSquares.style.width = 480 / squares + 'px';
            gridSquares.style.height = 480 / squares + 'px';
            gridSquares.classList = "grid";
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
}

getGrid(squares);

submit.addEventListener("click", function () {
    console.log(slider.value);
    while (grandparentContainer.firstChild) {
        grandparentContainer.removeChild(grandparentContainer.firstChild);
    }
    getGrid(slider.value);
    popupButton.click();
})
