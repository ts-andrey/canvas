import {
  getRandomColor,
  getRandomHeight,
  getRandomWidth,
  movementCorrector,
  randomIntBetween,
  randomNumberBetween,
} from '../util/helpers';

import { context } from '../canvas';
import { browserSize, mouseCoords } from '../util/variables';

export class RandomCircle {
  constructor() {
    this.radius = randomIntBetween(5, 30);
    this.currentRadius = this.radius;
    (this.x = getRandomWidth(this.radius)), (this.y = getRandomHeight(this.radius)), (this.color = getRandomColor());

    this.xSpeed = randomNumberBetween(-2.5, 2.5);
    this.ySpeed = randomNumberBetween(-5, 5);
  }

  draw = () => {
    context.beginPath();
    context.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2, false);

    context.strokeStyle = this.color;
    context.stroke();

    // context.fillStyle = this.color;
    // context.fill();
  };

  update = () => {
    this.y += this.ySpeed;
    this.x += this.xSpeed;

    this.ySpeed = movementCorrector(this.y, this.ySpeed, browserSize.height, this.radius);
    this.xSpeed = movementCorrector(this.x, this.xSpeed, browserSize.width, this.radius);

    if (
      (this.x - mouseCoords.x || mouseCoords.x - this.x) <= 50 ||
      (this.y - mouseCoords.y || mouseCoords.y - this.y) <= 50
    ) {
      this.currentRadius = this.radius / 10;
    } else {
      this.currentRadius = this.radius;
    }

    this.draw();
  };
}
