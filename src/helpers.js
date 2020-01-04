function getRandomIntInclusive(min, max) {
  const myMin = Math.ceil(min);
  const myMax = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

export const randomRotationStyle = () => {
  return {
    transform: `rotate(${getRandomIntInclusive(-5, 5)}deg)`,
  };
};

export const createRandomRotationStyles = num => {
  // a good old for loop would probably be quicker though;
  return new Array(num).fill().map(() => randomRotationStyle());
};
