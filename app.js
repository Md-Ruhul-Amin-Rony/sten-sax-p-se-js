let userScore = 0;
let computerScore = 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result");
const sten_div= document.getElementById("sten");
const påse_div= document.getElementById("påse");
const sax_div= document.getElementById("sax");

function getComputerChoice(){
    const choices=['sten', 'påse', 'sax'];
    const randomNumber= Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=userChoice+ "(user) beats " 
    +computerChoice+ "(computer). You win!";
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=userChoice+ "(user) loses to " 
    +computerChoice+ "(computer). You lost!";
}
function draw(userChoice,computerChoice){
    
    /* userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;  */
    result_p.innerHTML=userChoice+ "(user) equals " 
    +computerChoice+ "(computer). It's a Draw!";
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "stensax":
        case "påsesten":
        case "saxpåse":
        win(userChoice, computerChoice);
        break;
        case "stenpåse":
        case "påsesax":
        case "saxsten":
        lose(userChoice,computerChoice);
        break;
        case "stensten":
        case "påsepåse":
        case "saxsax":
        draw(userChoice,computerChoice);
        break;
    }
}





function main(){
sten_div.addEventListener("click", function(){
    game("sten")
}) 
påse_div.addEventListener("click", function(){
    game("påse")
}) 
sax_div.addEventListener("click", function(){
    game("sax")
}) 
}
main();