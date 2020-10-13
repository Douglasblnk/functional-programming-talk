class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} atacou!`);
  }

  walk() {
    console.log(`${this.name} andou!`);
  }
}

class FLyingMonster extends Monster {
  fly() {
    console.log(`${this.name} voou`);
  }
}

class SwimmingMonster extends Monster {
  siwm() {
    console.log(`${this.name} nadou`);
  }
}

const bear = new Monster('bear')
bear.walk();
bear.attack();

const eagle = new FLyingMonster('eagle')
eagle.walk();
eagle.attack();
eagle.fly();

const shark = new SwimmingMonster('shark');
shark.walk();
shark.attack();
shark.siwm();