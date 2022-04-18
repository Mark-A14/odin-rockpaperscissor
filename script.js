function computerPlay() {
     let num = Math.floor((Math.random() * 3) + 1);
     if (num === 1) {return cpuPick = "ROCK";}
     if (num === 2) {return cpuPick = "PAPER";}
     if (num === 3) {return cpuPick = "SCISSOR";}
}

function playRound(playerSelection, computerSelection) {
     let outcome_win = `You Win! ${playerSelection} Beats ${computerSelection}!`;
     let outcome_lose = `You Lose! ${computerSelection} Beats ${playerSelection}!`;

     if (playerSelection === computerSelection) {
          console.log("It's a tie");
          return;
     } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER"){
          console.log(outcome_win);
          return true;
     } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR"){
          console.log(outcome_win);
          return true;
     } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER"){
          console.log(outcome_win);
          return true;
     } else {
          console.log(outcome_lose);
          return false;
     }
   }
  
function game() {
     let player = 0;
     let computer = 0
     for (let i = 0; i < 5; i++){
          let playerSelection = prompt('ROCK,PAPER or SCISSOR?')
          let state = playRound(playerSelection.toUpperCase(), computerPlay());
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

game("ROCK");