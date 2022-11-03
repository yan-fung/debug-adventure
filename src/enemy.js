/* eslint-disable func-names */
const Character = require('../src/character.js');

function Enemy(config) {
  Character.call(this, config);
  this.damage = config.damage;
}

Enemy.prototype = Object.create(Character.prototype);

Object.defineProperty(Enemy.prototype, 'constructor', {
  value: Enemy,
  enumerable: false,
  writable: true,
});

Enemy.prototype._describeAttack = function (target) {
  return `${this.name} lets out a ${this.dialogue}, and hits ${target.name} for ${this.damage} damage!`;}


Enemy.prototype.attack = function (victim) {
  victim._takeDamage(this.damage);
  return this._describeAttack(victim);
};


module.exports = Enemy;
