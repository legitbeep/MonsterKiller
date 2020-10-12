const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');

const attackBtn = document.getElementById('attack-btn');
const strongAttack = document.getElementById('strong-attack-btn');
const heal = document.getElementById('heal-btn');
const surrender = document.getElementById('surrender-btn');

function adjustHealth(maxLife){
    monsterHealthBar.max = maxLife;
    monsterHealthBar.value = maxLife;
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage){
    const dealDamage = Math.random() * damage;
    monsterHealthBar.value = +monsterHealthBar.value - dealDamage;
    return dealDamage;
}

function dealPlayerDamage(damage){
    const dealDamage = Math.random() * damage;
    playerHealthBar.value = +playerHealthBar.value - dealDamage;
    return dealDamage;
}

function increasePlayerHealth(healValue){
    playerHealthBar.value += healValue;
}

function resetGame(){
    playerHealthBar.value = chosenLife;
    curPlayerHealth = chosenLife;
    monsterHealthBar.value = chosenLife;
    curMonsterHealth = chosenLife;
    strongAttackCounter  = 1;
    adjustHealth(chosenLife);
}