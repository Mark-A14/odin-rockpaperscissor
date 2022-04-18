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
          console.log("It's a tie");
          return;
     } else if (playerSelection == "Scissor" && computerSelection == "Paper"){
          console.log(outcome_win);
          return true;
     } else if (playerSelection == "Rock" && computerSelection == "Scissor"){
          console.log(outcome_win);
          return true;
     } else if (playerSelection == "Scissor" && computerSelection == "Paper"){
          console.log(outcome_win);
          return true;
     } else {
          console.log(outcome_lose);
          return false;
     }
   }
  
function game(playerSelection) {
     let player = 0;
     let computer = 0
     for (let i = 0; i < 5; i++){
          let state = playRound(playerSelection, computerPlay());
          if (state === true){
               player++;
          } 
          if (state === false){
               computer++;
          }
          if (state == undefined){
               i--;
          }
     }
     if (player > computer){
          console.log('You win the game!');
     } else {
          console.log('You lose!');
     }
     console.log(`Your score: ${player}`)
     console.log(`Computer score: ${computer}`)
}

game("Rock");