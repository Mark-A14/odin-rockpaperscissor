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
          const who_win = playRound(this.id.toUpperCase(), computerPlay());
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
     console.log(num);
     if (num === 1) {
          bg.style.backgroundImage = "url(./assets/rock_pc.png)";
          return cpuPick = "ROCK";}
     if (num === 2) {
          bg.style.backgroundImage = "url(./assets/paper_pc.png)";
          return cpuPick = "PAPER";}
     if (num === 3) {
          bg.style.backgroundImage = "url(./assets/scissor_pc.png)";
          return cpuPick = "SCISSOR";}
}

function playRound(playerSelection, computerSelection) {
     let player = 0;
     let cpu = 0;
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
     } else if (playerSelection == "SCISSOR" && computerSelection == "PAPER"){
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