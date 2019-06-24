class Enemy extends Person {
  constructor(xcord, ycord, power, health, id) {
    super(xcord, ycord, power, health);
    this.id = id;
    this.direction = id;
    this.indexOfImage = 4;
    this.enemyMovingRight = [];
    this.enemyMovingDown = [];
    this.enemyMovingLeft = [];
    this.enemyMovingUp = [];
    this.enemyDying = [];
    this.currDirection = "N";
    this.enemyBulletCordX = 1;
    this.enemyBulletCordY = 1;

  }
  createEnemyDying(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyDying.push(enemyImage);
  }
  createEnemyMovingRight(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyMovingRight.push(enemyImage);
  }
  createEnemyMovingDown(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyMovingDown.push(enemyImage);
  }
  createEnemyMovingLeft(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyMovingLeft.push(enemyImage);
  }
  createEnemyMovingUp(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyMovingUp.push(enemyImage);
  }

  drawSelf(theCanvas, myGame) {
    theCanvas.clearEnemy(this);
    if (this.health > 0) {
      let enemyDirection = this.direction % 4;
      if (enemyDirection === 0 && (this.id === 0 || this.id === 4)) {
        if (!theCanvas.detectLine(this.x, this.y + 35)) {
          this.y += 5;
          this.currDirection = "S";
        } else {
          if (this.id === 0) {
            this.direction += 2;
          } else {
            this.direction++;
          }
        }
        let currIndexOfEnemy = this.indexOfImage % 4;
        let img = this.enemyMovingDown[currIndexOfEnemy];
        theCanvas.drawEnemy(img, this);
      } else if (enemyDirection === 1 && (this.id === 5 || this.id === 4)) {
        if (!theCanvas.detectLine(this.x + 35, this.y)) {
          this.x += 5;
          this.currDirection = "E";
        } else {
          if (this.id === 5) {
            this.direction += 2;
          } else {
            this.direction++;
          }
        }
        let currIndexOfEnemy = this.indexOfImage % 4;
        let img = this.enemyMovingRight[currIndexOfEnemy];
        theCanvas.drawEnemy(img, this);
      } else if (enemyDirection === 2 && (this.id === 0 || this.id === 4)) {
        if (!theCanvas.detectLine(this.x, this.y - 15)) {
          this.y -= 5;
          this.currDirection = "N";
        } else {
          if (this.id === 0) {
            this.direction += 2;
          } else {
            this.direction++;
          }
        }
        let currIndexOfEnemy = this.indexOfImage % 4;
        let img = this.enemyMovingUp[currIndexOfEnemy];
        theCanvas.drawEnemy(img, this);
      } else if (enemyDirection === 3 && (this.id === 5 || this.id === 4)) {
        if (!theCanvas.detectLine(this.x - 15, this.y)) {
          this.x -= 5;
          this.currDirection = "W";
        } else {
          if (this.id === 5) {
            this.direction += 2;
          } else {
            this.direction++;
          }
        }
        let currIndexOfEnemy = this.indexOfImage % 4;
        let img = this.enemyMovingLeft[currIndexOfEnemy];
        theCanvas.drawEnemy(img, this);
      }

      // theCanvas.drawEnemy(this);
    }
  }
}
