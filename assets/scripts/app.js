const ATTACK_VALUE  = 10;
const STRONG_ATTACT_VALUE = 17;
const MONSTER_ATTACT_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; //MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; //MODE_STRONG_ATTACK = 1;

const entrededValue =  prompt('Maxiumum life you and the monster','100');

let chosenMaxLife = parseInt(entrededValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamege = dealPlayerDamage(MONSTER_ATTACT_VALUE);
  currentPlayerHealth -= playerDamege;

  if (currentPlayerHealth <=0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saced you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert('you hava a draw!');
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACT_VALUE;
  }
  const damege = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damege;
  endRound();
}

function attactHandler() {
  attackMonster(MODE_ATTACK)
}

function strongAttactHandler() {
  attackMonster(MODE_STRONG_ATTACK)
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  } 
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue
  endRound();
}

attackBtn.addEventListener('click', attactHandler);
strongAttackBtn.addEventListener('click', strongAttactHandler);
healBtn.addEventListener('click', healPlayerHandler);
