const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleResultValidation(gameState) {
  let roundWon = false;
  let result = "";

  for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];
      if (a === '' || b === '' || c === '') {
          continue;
      }
      if (a === b && b === c) {
          roundWon = true;
          result = a;
          break
      }
  }

  if (roundWon) {
    return result;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    result = "draw";
    return result;
  }
}

export default handleResultValidation;