const textarealEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const remainingCounterEl = document.getElementById("remaining-counter");

textarealEl.addEventListener("keyup", ()=>{
    updateCounter()
});

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textarealEl.value.length;
    remainingCounterEl.innerText = textarealEl.getAttribute("maxLength") - textarealEl.value.length;
   
};