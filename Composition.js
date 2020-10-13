const swimmer = ({ name }) => ({
  swim: () => console.log(`${name} nadou`),
  fastSwim: () => console.log(`${name} nadou rápido`),
  dive: () => console.log(`${name} mergulhou`),
});

const flyer = ({ name }) => ({
  fly: () => console.log(`${name} voou`),
  soar: () => console.log(`${name} plainou`),
  up: () => console.log(`${name} voou para cima`),
  down: () => console.log(`${name} voou para baixo`),
});

const monster = ({ name }) => ({
  walk: () => console.log(`${name} andou`),
  attack: () => console.log(`${name} atacou`),
  defend: () => console.log(`${name} defendeu`),
});

const monsterName = { name: 'adapMonster' }

const commonMonster = ({
  ...monster(monsterName)
});

commonMonster.attack();
commonMonster.defend();
commonMonster.walk();

const flyingMonster = ({
  ...monster(monsterName),
  ...flyer(monsterName),
});

flyingMonster.walk();
flyingMonster.fly();
flyingMonster.soar();

const diverseMonster = ({
  ...monster(monsterName),
  ...swimmer(monsterName),
  ...flyer(monsterName),
})