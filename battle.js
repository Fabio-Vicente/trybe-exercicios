const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => Math.floor(Math.random() * (dragon.strength - 15)) + 15;

const damageWarrior = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength;

const damageMage = () => mage.mana > 15 ? {
    damage: Math.floor(Math.random() * mage.intelligence / 2) + mage.intelligence,
    manaSpent: 15
} : 'Não possui mana suficiente';

const gameActions = {
    warrior: damageWarrior => {
        warrior.damage = damageWarrior();
        dragon.healthPoints -= warrior.damage;
    },
    mage: damageMage => {
        const mageTurn = damageMage();
        mage.damage = mageTurn.damage;
        mage.mana -= mageTurn.manaSpent;
        dragon.healthPoints -= mage.damage;
    },
    dragon: damageDragon => {
        dragon.damage = damageDragon();
        mage.healthPoints -= dragon.damage;
        warrior.healthPoints -= dragon.damage;
    },
    turn: () => {
        gameActions.warrior(damageWarrior);
        gameActions.mage(damageMage);
        gameActions.dragon(damageDragon);
        console.log(battleMembers);
        return battleMembers;
    }
};