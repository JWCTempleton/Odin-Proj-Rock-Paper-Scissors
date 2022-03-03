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

// Button Event Listener Logic
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

// DOM Manipulation Logic
const header = document.querySelector(".header");
const resultsDiv = document.createElement("div");
const roundDiv = document.createElement("div");
const playerScoreDiv = document.createElement("div");
const computerScoreDiv = document.createElement("div");

function playRound(playerChoice, computerChoice) {
  roundDiv.textContent = `Round: ${round}`;

  header.appendChild(roundDiv);

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultsDiv.textContent = `\r\rYou win, ${playerChoice} beats ${computerChoice}!`;
    header.appendChild(resultsDiv);
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    resultsDiv.textContent = `\r\rComputer wins, ${computerChoice} beats ${playerChoice}!`;
    header.appendChild(resultsDiv);
  } else {
    resultsDiv.textContent = "\r\rTie game!";
    header.appendChild(resultsDiv);
  }
  playerScoreDiv.textContent = "Player Score: " + playerScore;
  computerScoreDiv.textContent = "Computer Score: " + computerScore;
  header.appendChild(playerScoreDiv);
  header.appendChild(computerScoreDiv);

  if (playerScore === 3) {
    header.removeChild(roundDiv);
    resultsDiv.textContent = `Player wins the game in round ${round}!`;
  } else if (computerScore === 3) {
    header.removeChild(roundDiv);
    resultsDiv.textContent = `Computer wins the game in round ${round}!`;
  }
}
