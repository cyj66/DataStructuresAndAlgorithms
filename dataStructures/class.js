//ES6之前属性和方法的继承
function Hero(name, fight) {
  this.name = name;
  this.fight = fight;
}
Hero.prototype.join = function (ultimate) {
  console.log(this.name + this.fight+ultimate);
};
const jianmo = new Hero("yatuokesi", "big-sword");
jianmo.join("大灭");
console.log(jianmo);

function Warrior(name, fight, league) {
  Hero.call(this, name, fight);
  this.league = league;
}
// const nuoshou = new Warrior("delaiesi", "ax", "nuokesasi"); 注意顺序
Warrior.prototype = new Hero();
Warrior.prototype.constructor = Warrior;
const nuoshou = new Warrior("delaiesi", "ax", "nuokesasi");
nuoshou.join("断头台");
console.log(nuoshou);

//类
class Top{
  constructor(name,fight) {
    this.name = name;
    this.fight = fight;
  }
  say() {
    console.log("my name is "+this.name)
  }
}
const aoen = new Top("奥恩", "hammer")
aoen.say()

class Tank extends Top{
  constructor(name, fight, league) {
    super(name, fight)
    this.league=league
  }
}
const dachongzi = new Tank("kejiasi", "mouth", "xukong")
console.log(dachongzi)
dachongzi.say()