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
    let R, B, G;
    grids.forEach((grid) => {
        let hue = 0.1;
        grid.addEventListener("mouseover", (event) => {
            
            // if (event.target.style.backgroundColor != "") {
            //     event.target.style.backgroundColor = "rgba(" + R + ", " + G + ", " + B + ", " + hue + ")";
            //     hue += 0.1;
            // }
            // else {
            //     R = Math.random() * 256;
            //     B = Math.random() * 256;
            //     G = Math.random() * 256;
            //     event.target.style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")";
            // }

        });
        grid.addEventListener("mouseout", (event) => {
            
            if (event.target.style.backgroundColor != "") {
                hue += 0.1;
                event.target.style.backgroundColor = "rgba(" + R + ", " + G + ", " + B + ", " + hue + ")";
                
            }
            else {
                R = Math.random() * 256;
                B = Math.random() * 256;
                G = Math.random() * 256;
                event.target.style.backgroundColor = "rgba(" + R + ", " + G + ", " + B + ", " + hue + ")";
            }
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
