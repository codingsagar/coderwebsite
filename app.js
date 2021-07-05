let btn = document.querySelector("h3");
btn.addEventListener("click",()=>{

    // The query selector will select first ul and that is navbar items which we want
    let ul = document.querySelector("ul");
    ul.classList.toggle("left0");


    // Then we want to show cancel button instead of burger menu
    let burgerIcon = document.querySelector("h3");
    if (burgerIcon.innerHTML === "🍔") {
        burgerIcon.innerHTML = "&Cross;";
        burgerIcon.style.fontSize = "2.7rem";
        burgerIcon.style.right = "15px"
    } else {
        burgerIcon.innerHTML = "🍔";
        burgerIcon.style.fontSize = "2rem";
        burgerIcon.style.right = "10px"
    }
})