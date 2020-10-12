const ATTACK_VAL = 10;
const MONSTER_ATTACK_VAL = 15;
const STRONG_ATTACK_VAL = 20;
const HEAL_VAL = 20;
let chosenLife = parseInt(prompt('Enter max health of player and monster.'));
if( chosenLife <= 0 || isNaN(chosenLife)){
    chosenLife = 100;
}
let curPlayerHealth = chosenLife;
let curMonsterHealth = chosenLife;
let strongAttackCounter = 1;
adjustHealth(chosenLife);

function gameOver(){
    if( curMonsterHealth <= 0 && curPlayerHealth <= 0 ){
        alert("DRAW?");
        resetGame();
    } else if( curMonsterHealth <= 0 ){
        alert("VICTORY!");
        resetGame();
    } else {   
    const dealtdamage = dealPlayerDamage(MONSTER_ATTACK_VAL);
    curPlayerHealth -= dealtdamage ;
    if( curPlayerHealth <= 0 ){
        alert("TRY AGAIN!")
        resetGame();
    }
    }
}

function dealDamage(attackType){
    if( attackType == 'ATTACK' ){
        const dealtDamage = dealMonsterDamage(ATTACK_VAL);
        curMonsterHealth -= dealtDamage;
        gameOver();
    } else {
        const dealtDamage = dealMonsterDamage(STRONG_ATTACK_VAL);
        curMonsterHealth -= dealtDamage;
        gameOver();
    }
}

function attackHandler(){
    strongAttackCounter++;
    dealDamage('ATTACK');
}

function strongAttackHandler(){
    if( strongAttackCounter > 3 ){
        strongAttackCounter = strongAttackCounter-3;
        dealDamage("STRONG_ATTACK");
    } else {
        alert(`Cooldown of ${4-strongAttackCounter} moves!`);
    }
}

function healPlayer(){
    let healVal = HEAL_VAL;
    strongAttackCounter++;
    if( curPlayerHealth + HEAL_VAL > chosenLife )
    {
        healVal = chosenLife - curPlayerHealth;
    }
    increasePlayerHealth(healVal);
    curPlayerHealth += healVal;
    gameOver();
}

attackBtn.addEventListener('click',attackHandler);
strongAttack.addEventListener('click',strongAttackHandler);
heal.addEventListener('click',healPlayer);
surrender.addEventListener('click',resetGame);