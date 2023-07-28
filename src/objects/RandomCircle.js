import { getRandomColor, getRandomHeight, getRandomWidth, randomIntBetween } from '../util/helpers';

import { context } from '../canvas';

export class RandomCircle{
  constructor() {
    this.radius = randomIntBetween(20, 50);
    this.x = getRandomWidth(this.radius),
    this.y = getRandomHeight(this.radius),
    this.color = getRandomColor();
  }

  draw = () => {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    context.strokeStyle = this.color;
    context.stroke();

    // context.fillStyle = this.color;
    // context.fill();
  };

  update = () => {};
}
