import { colors } from './colors';
import { browserSize } from './variables';

export const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const randomNumberBetween = (min, max) => Math.random() * (max - min + 1) + min;

export const getRandomWidth = (boundary = 0) => randomIntBetween(0 + boundary, browserSize.width - boundary);
export const getRandomHeight = (boundary = 0) => randomIntBetween(0 + boundary, browserSize.height - boundary);

export const getRandomColor = () => colors[randomIntBetween(0, colors.length - 1)];

export const generateObjectsArray = (arr, Obj, amount) => {
  for (let i = 0; i < amount; i++) arr.push(new Obj());
};

export const movementCorrector = (position, speed, limit, size) => {
  if (position >= limit - size || position <= size) {
    return -speed;
  }
  return speed;
};

