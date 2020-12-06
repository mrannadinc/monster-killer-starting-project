const ATTACK_VALUE  = 10;
const STRONG_ATTACT_VALUE = 17;
const MONSTER_ATTACT_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamege = dealPlayerDamage(MONSTER_ATTACT_VALUE);
  currentPlayerHealth -= playerDamege;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert('you hava a draw!');
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACT_VALUE;
  }
  const damege = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damege;
  endRound();
}

function attactHandler() {
  attackMonster('ATTACK')
}

function strongAttactHandler() {
  attackMonster('STRONG_ATTACK')
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
















