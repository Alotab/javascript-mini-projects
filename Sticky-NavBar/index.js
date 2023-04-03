const navbarEl = document.querySelector(".navbar");

const bottomConatinerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomConatinerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
});