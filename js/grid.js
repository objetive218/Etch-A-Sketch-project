const main = document.querySelector("#main") ;
const change = document.querySelector("#newGrid");// button grid
const toggleColor = document.querySelector("#toggleColor"); // button toggle color
const toggleShading = document.querySelector("#toggleShading");// button toggle shadow


let selectMode = true;
const toggleMode = () => {
    selectMode ? selectMode = false : selectMode = true;
}
toggleColor.addEventListener("click", () => {
    let allBox = document.querySelectorAll(".del")
    toggleMode();
    del(allBox)
    create(total)
    selectMode === false?createRambow(): activeHover;
})
const changeColor = (e) => {
    e.style.backgroundColor = randomColor();
}
const activeHover = (box) => {
    box.classList.toggle("active")
};
let total = 256;
// hover black 
const create = (total) => {
    for (let index = 0; index < total; index++) {
        let box = document.createElement("div");
        box.id =  (`grid${index}`);
        box.classList= "del";
        main.appendChild(box);
        box.addEventListener("mouseover",(e) =>{
            if(selectMode === null){
            }else{
                selectMode ? activeHover(e.target): changeColor(e.target);
            }
        } )
    };
}
// hover ranbow
const createRambow = () => {
    let allBox = document.querySelectorAll(".del")
    allBox.forEach(element => {
        element.addEventListener("mouseover",(e) =>{
            changeColor(e.target)
        })
    })
}
// toggle shading
toggleShading.addEventListener("click", () => {
    selectMode = null;
    let allBox = document.querySelectorAll(".del")
    del(allBox)
    create(total)
    toggleShadow()
})


const toggleShadow = () => {
    let allBox = document.querySelectorAll(".del")
    allBox.forEach(element => {
        element.addEventListener("mouseover",(e) =>{  
            let currentOpacity = Number(e.target.style.backgroundColor.slice(-4, -1))
            if(currentOpacity <= 0.9){
                e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
            }else if (e.target.style.backgroundColor == 'rgb(0, 0, 0)'){
                return;
            }else{
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; 
            }
        })
    })
}


// delet all elements
const del = (allElements) => {
    allElements.forEach(element => {
        element.remove();
    });
}

create(total);


const selectionSize = () => {
    let allBox = document.querySelectorAll(".del")
    let grid = prompt("enter the new number of grid")
    if(grid != Number){
        "Error, the value is not a number"
    }else if (grid > 100){
        "The number should be less than 100"
    }
    total = grid * grid ;
    del(allBox);
     create(total);
    main.style.width = (`${grid * 14}px`)
    main.style.height = (`${grid * 14}px`)
};

change.addEventListener("click", () => {
    selectionSize()
})


//random color generator

const random = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomNumber = () => random(0,255);
const randomPercent = () => (random(50,100) * 0.01).toFixed(2);
const randomColor = () => `rgba(${[randomNumber(),randomNumber(),randomNumber(), randomPercent()].join(",")})`

