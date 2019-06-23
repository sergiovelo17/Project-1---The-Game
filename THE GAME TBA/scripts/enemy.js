class Enemy extends Person {
  constructor(xcord, ycord, power, health, id) {
    super(xcord, ycord, power, health);
    this.id = id;
    this.direction = id;
  }

  drawSelf(theCanvas) {
    theCanvas.clearEnemy(this);
    let enemyDirection = this.direction % 4;
    if (enemyDirection === 0 && (this.id === 0 || this.id === 4)) {
      if (!theCanvas.detectLine(this.x, this.y + 21)) {
        this.y += 7;
      } else {
        if (this.id === 0) {
          this.direction += 2;
        } else {
          this.direction++;
        }
      }
    } else if (enemyDirection === 1 && (this.id === 5 || this.id === 4)) {
      if (!theCanvas.detectLine(this.x + 21, this.y)) {
        this.x += 7;
      } else {
        if (this.id === 5) {
          this.direction +=2;
        } else {
          this.direction++;
        }
      }
    } else if (enemyDirection === 2 && (this.id === 0 || this.id === 4)) {
      if (!theCanvas.detectLine(this.x, this.y - 7)) {
        this.y -= 7;
      } else {
        if (this.id === 0) {
          this.direction += 2;
        } else {
          this.direction++;
        }
      }
    } else if (enemyDirection === 3 && (this.id === 5 || this.id === 4)) {
      if (!theCanvas.detectLine(this.x - 7, this.y)) {
        this.x -= 7;
      } else {
        if (this.id === 5) {
          this.direction += 2;
        } else {
          this.direction++;
        }
      }
    }

    theCanvas.drawEnemy(this);
  }
}
