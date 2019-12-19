const Cat = require('../Modles/Cat');
const mongoose = require('mongoose');
const chance = require('chance')();

function insertInitalSchoolOfCats(){ 
  const arrToHoldCats = Array(100).fill({});
  const catArr = arrToHoldCats.map(() => {
    return Cat.create({
      broadGrin: chance.bool(),
      soManyTeethInItsMouth: chance.bool(),
      canScaleATreeSoQuicklyScale: chance.d100(),
      isToHeavy: chance.bool(),
      numberOfTails: chance.d30(),
      slySinisterAndSleek: chance.bool(),
      weightPolitelyDescribed: chance.paragraph(),
      hasAnOwnerOr2: chance.bool()
    });
  });
  return catArr;
}

module.exports = insertInitalSchoolOfCats;

