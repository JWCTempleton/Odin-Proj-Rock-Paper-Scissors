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

function playerSelection() {
  let playerChoice = prompt(
    "Please select your move, Rock, Paper or Scissors: "
  ).toLocaleLowerCase();
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win, ${playerChoice} beats ${computerChoice}!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    return `Computer wins, ${computerChoice} beats ${playerChoice}!`;
  } else {
    return "Tie game!";
  }
}

console.log(playRound(playerSelection(), computerPlay()));
