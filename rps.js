const choices =["rock", "paper", "scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("result");
const playerScore=document.getElementById("playerScore");
const computerScore=document.getElementById("computerScore");
let playerCount=0;
let computerCount=0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result="";


    resultDisplay.classList.remove("resultLose","resultWin","resultTie");



    if(playerChoice==computerChoice){
        result = "IT'S A TIE!";
        resultDisplay.classList.add("resultTie");


    }
    else{
        switch(playerChoice){
            case "rock":{
                if(computerChoice=="paper"){
                    result="YOU LOSE!";
                    resultDisplay.classList.add("resultLose");
                    computerCount+=1

                }
                else{
                    result="YOU WIN!";
                    resultDisplay.classList.add("resultWin");
                    playerCount+=1;
                }
                break;
            }

            case "paper":{
                if(computerChoice=="scissors"){
                    result="YOU LOSE!";
                    resultDisplay.classList.add("resultLose");
                    computerCount+=1
                }
                else{
                    result="YOU WIN!";
                    resultDisplay.classList.add("resultWin");
                    playerCount+=1;

                }
                break;
            }
            case "scissors":{
                if(computerChoice=="rock"){
                    result="YOU LOSE!";
                    resultDisplay.classList.add("resultLose");
                    computerCount+=1
                }
                else{
                    result="YOU WIN!";
                    resultDisplay.classList.add("resultWin");
                    playerCount+=1;

                }
                break;
            }
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=`${result}`;
    playerScore.textContent=`${playerCount}`;
    computerScore.textContent=`${computerCount}`;
    




}

