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

function game() {
  let round = 1;
  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerChoice, computerChoice) {
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
  }

  while (playerScore < 3 || computerScore < 3) {
    console.log(
      `Round ${round}\n Player: ${playerScore}\nComputer: ${computerScore}`
    );
    playRound(playerSelection(), computerPlay());
    round++;
    if (playerScore === 3) {
      console.log(`Player wins!`);
      return;
    } else if (computerScore === 3) {
      console.log(`Computer wins!`);
      return;
    }
  }
}

game();
