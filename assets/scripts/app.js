const ATTACK_VALUE  = 10;
const STRONG_ATTACT_VALUE = 17;
const MONSTER_ATTACT_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACT_VALUE;
  }
  const damege = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damege;
  const monsterDamege = dealPlayerDamage(MONSTER_ATTACT_VALUE);
  currentPlayerHealth -= monsterDamege;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert('you hava a draw!');
  }
}

function attactHandler() {
  attackMonster('ATTACK')
}

function strongAttactHandler() {
  attackMonster('STRONG_ATTACK')
}

attackBtn.addEventListener('click', attactHandler);
strongAttackBtn.addEventListener('click', strongAttactHandler);

















