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
  console.log(result);
}
