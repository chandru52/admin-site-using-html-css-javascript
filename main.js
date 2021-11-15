let aside = document.querySelector("aside");
let menuBtn = document.querySelector("#menu-bar");
let clsBtn = document.querySelector("#cls-btn")


menuBtn.addEventListener('click', () =>{
    aside.style.display = 'block';
}
)
clsBtn.addEventListener('click', () =>{
    aside.style.display = 'none';
})