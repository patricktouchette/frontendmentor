// Get player pick (this should be an input, not hardcoded)
const playerPick = 'rock';
// Get random pick for computer
const choices = ['rock', 'paper', 'scissor'];
const computerPick = choices[Math.floor(Math.random() * 3)];

// Declare the ruleset as an object for win conditions
// rock beats scissor
// paper beats rock
// sicssor beats paper
const rules = {
  rock: 'scissor',
  paper: 'rock',
  scissor: 'paper',
};

// check if player won, lost or got a draw
const compare = () => {
  if (playerPick === computerPick) return 'draw';
  if (rules[playerPick] === computerPick) return 'win';
  return 'lose';
};

console.log('playerPick', playerPick);
console.log('computerPick', computerPick);
console.log(compare());