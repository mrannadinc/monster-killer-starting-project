const ATTACK_VALUE  = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;


adjustHealthBars(chosenMaxLife);

function attactHandler() {
  const damege = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damege;
  if(currentMonsterHealth <= 0) {
    alert('You won!');
  }
}

attackBtn.addEventListener(click, attactHandler);


















