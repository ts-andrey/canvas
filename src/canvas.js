import { RandomCircle } from './objects/RandomCircle';
import { generateObjectsArray } from './util/helpers';
import { browserSize, mouseCoords } from './util/variables';

import './sass/style.scss';

export const canvas = document.createElement('canvas');
export const context = canvas.getContext('2d');

canvas.width = browserSize.width;
canvas.height = browserSize.height;

const body = document.getElementById('body');
body.insertAdjacentElement('afterbegin', canvas);

canvas.addEventListener('mousemove', event => {
  mouseCoords.x = event.x;
  mouseCoords.y = event.y;
});

const circleArr = [];
const init = () => {
  circleArr.length = 0;
  generateObjectsArray(circleArr, RandomCircle, 500);
};
init();

export const animate = () => {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, browserSize.width, browserSize.height);

  circleArr.forEach(el => el.update());
};

window.addEventListener('resize', event => {
  browserSize.height = event.target.innerHeight;
  browserSize.width = event.target.innerWidth;
  canvas.width = browserSize.width;
  canvas.height = browserSize.height;
  init();
});
