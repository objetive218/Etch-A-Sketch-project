const main = document.querySelector("#main") ;


const activeHover = (box) => {
    box.classList.toggle("active")
}

for (let i = 0; i < 256; i++) {
    let box = document.createElement("div");
    box.id =  (`grid${i}`);
    main.appendChild(box);
    box.addEventListener("mouseover",(e) =>{
        activeHover(e.target)
    } )
}
