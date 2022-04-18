function computerPlay() {
     let num = Math.floor((Math.random() * 3) + 1);
     if (num === 1) {return cpuPick = "Rock";}
     if (num === 2) {return cpuPick = "Paper";}
     if (num === 3) {return cpuPick = "Scissor";}
}

function playRound(playerSelection, computerSelection) {
     let outcome_win = `You Win! ${playerSelection} Beats ${computerSelection}!`;
     let outcome_lose = `You Lose! ${computerSelection} Beats ${playerSelection}!`;

     if (playerSelection == computerSelection) {
          return outcome = "It's a tie";
     } else if (playerSelection == "Scissor" && computerSelection == "Paper"){
          return outcome_win;
     } else if (playerSelection == "Rock" && computerSelection == "Scissor"){
          return outcome_win;
     } else if (playerSelection == "Scissor" && computerSelection == "Paper"){
          return outcome_win;
     } else {
          return outcome_lose;
     }
   }
  
function game() {
     for (let i = 0; i < 5; i++){
          playRound(playerSelection, computerSelection);
     }
     if (player > computer){
          console.log('You win the game!');
     } else {
          console.log('You lose!');
     }
}
   
const playerSelection = document.querySelector('input').value;
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

game();