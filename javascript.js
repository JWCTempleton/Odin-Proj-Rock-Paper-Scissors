function computerPlay() {
  let result = "";
  let compPick = Math.floor(Math.random() * 3) + 1;
  if (compPick === 1) {
    result = "Rock";
  } else if (compPick === 2) {
    result = "Paper";
  } else {
    result = "Scissors";
  }
  return result;
}

function playerSelection() {
  let playerChoice = prompt(
    "Please select your move, Rock, Paper or Scissors: "
  ).toLocaleLowerCase();
  return playerChoice;
}
