import _ from 'underscore';

function getRandomIntInclusive(min, max) {
  const myMin = Math.ceil(min);
  const myMax = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

export const randomRotationStyle = (strongRotationChance, strongRotationAdd) => {
  let extreme = 0;
  if (getRandomIntInclusive(1, strongRotationChance) === 1) {
    extreme = strongRotationAdd;
  }
  return {
    transform: `rotate(${getRandomIntInclusive(-5 - extreme, 5 + extreme)}deg)`,
  };
};

export const createRandomRotationStyles = (num, strongRotationChance, strongRotationAdd) => {
  // a good old for loop would probably be quicker though;
  return new Array(num)
    .fill()
    .map(() => randomRotationStyle(strongRotationChance, strongRotationAdd));
};

export const randomContent = (available, num) => {
  let selectedContent = _.shuffle(available).slice(0, num / 2);
  selectedContent = selectedContent.concat(selectedContent);
  return _.shuffle(selectedContent);
};
