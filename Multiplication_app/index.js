//generate numbers between 1 and 10
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

//get element from the question id
const questionEl = document.getElementById("question");

const inputElement = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreElement = document.getElementById("score");

//update the current score board
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreElement.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

//checking the answers
const corectAnswer = num1*num2;


formEl.addEventListener('submit', ()=>{
    const userAnswer = +inputElement.value  //add the + to change the string number into interger
    
    if(userAnswer === corectAnswer){
        score++
        updateLocalStorage();
    }else{
        score --
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    //current store value is stored in a local storage in a string format
    localStorage.setItem("score", JSON.stringify(score))
}
