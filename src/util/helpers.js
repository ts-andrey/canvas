import { colors } from './colors';
import { browser } from './variables';

export const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomWidth = (boundary = 0) => randomIntBetween(0 + boundary, browser.width - boundary);
export const getRandomHeight = (boundary = 0) => randomIntBetween(0 + boundary, browser.height - boundary);

export const getRandomColor = () => colors[randomIntBetween(0, colors.length - 1)];

export const generateObjectsArray = (Obj, amount) => {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(new Obj());
  }
  return arr;
}