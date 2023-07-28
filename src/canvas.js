import { RandomCircle } from './objects/RandomCircle';
import { generateObjectsArray } from './util/helpers';
import { browser } from './util/variables';

import './sass/style.scss';

export const canvas = document.createElement('canvas');
export const context = canvas.getContext('2d');

canvas.width = browser.width;
canvas.height = browser.height;

const body = document.getElementById('body');
body.insertAdjacentElement('afterbegin', canvas);

const circleArr = generateObjectsArray(RandomCircle, 200);

export const animate = () => {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, browser.width, browser.height);

  circleArr.forEach(el => el.draw());
};
