function computerPlay() {
  let result = "";
  let compPick = Math.floor(Math.random() * 3) + 1;
  if (compPick === 1) {
    result = "rock";
  } else if (compPick === 2) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
}

let round = 1;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".btn-rock");
const paperButton = document.querySelector(".btn-paper");
const scissorsButton = document.querySelector(".btn-scissors");

rockButton.addEventListener("click", () => {
  let playerChoice = "rock";
  playRound(playerChoice, computerPlay());
  round++;
});
paperButton.addEventListener("click", () => {
  let playerChoice = "paper";
  playRound(playerChoice, computerPlay());
  round++;
});
scissorsButton.addEventListener("click", () => {
  let playerChoice = "scissors";
  playRound(playerChoice, computerPlay());
  round++;
});

function playRound(playerChoice, computerChoice) {
  console.log(`Round: ${round}`);
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    console.log(`You win, ${playerChoice} beats ${computerChoice}!`);
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(`Computer wins, ${computerChoice} beats ${playerChoice}!`);
  } else {
    console.log("Tie game!");
  }

  if (playerScore === 3) {
    console.log(`Player wins the game in round ${round}!`);
  } else if (computerScore === 3) {
    console.log(`Computer wins the game in round ${round}!`);
  }
}
