function test (){
     let playerShowPick = document.getElementById('show-player-pick');
     playerShowPick.style.backgroundImage = `url(./assets/${this.id}_player.png)`;



     let playerScore = document.getElementById('player-score');
     let cpuScore = document.getElementById('cpu-score');
     let intPlayerScore = parseInt(playerScore.textContent);
     let intCpuScore = parseInt(cpuScore.textContent);
     if (intPlayerScore === 5 || intCpuScore === 5) {
          playerScore.textContent = 0;
          cpuScore.textContent = 0;
     } else {
          const who_win = playRound(this.id.toUpperCase(), computerPlay().toUpperCase());
          if (who_win){
               playerScore.textContent = intPlayerScore + 1;
          }  
          if (who_win !== undefined && !who_win){
               cpuScore.textContent = intCpuScore + 1;
               console.log()
          }
     }
}

function computerPlay() {
     let bg = document.getElementById('show-cpu-pick');
     let num = Math.floor((Math.random() * 3) + 1);
     let cpuPick = '';
     console.log(num);

     switch (num) {
          case 1:
               cpuPick = 'rock';
               break;
          case 2:
               cpuPick = 'paper';
               break;
          case 3:
               cpuPick = 'scissor';
               break;
     
     }
     bg.style.backgroundImage = `url(./assets/${cpuPick}_pc.png)`;
     return cpuPick.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
     let outcome_win = `You Win! ${playerSelection} Beats ${computerSelection}!`;
     let outcome_lose = `You Lose! ${computerSelection} Beats ${playerSelection}!`;

     if (playerSelection == computerSelection) {
          console.log("It's a tie");
          return;
     } else if (playerSelection == "SCISSOR" && computerSelection == "PAPER"){
          console.log(outcome_win);
          return true;
     } else if (playerSelection == "ROCK" && computerSelection == "SCISSOR"){
          console.log(outcome_win);
          return true;
     } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
          console.log(outcome_win);
          return true;
     } else {
          console.log(outcome_lose);
          return false;
     }
   }


const buttons = document.querySelectorAll('.selection');
buttons.forEach(pick => { pick.addEventListener('click', test)
});

// // function game() {
// //      let player = 0;
// //      let computer = 0
// //      for (let i = 0; i < 5; i++){
// //           let playerSelection = prompt('ROCK,PAPER or SCISSOR?')
// //           let state = playRound(playerSelection.toUpperCase(), computerPlay());
// //           if (state === true){
// //                player++;
// //           } 
// //           if (state === false){
// //                computer++;
// //           }
// //           if (state == undefined){
// //                i--;
// //           }
// //      }
// //      if (player > computer){
// //           alert(`You Win! Your score: ${player} ||| Computer score: ${computer}`)
// //      } else {
// //           alert(`You Loss! Your score: ${player} ||| Computer score: ${computer}`)
// //      }
// // }

// // game();