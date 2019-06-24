class Bullet {
  constructor(xcord, ycord, direction) {
    this.x = xcord;
    this.y = ycord;
    this.direction = direction;
    this.height = 4;
    this.width = 4;
  }
  bulletCollision(allBullets) {
    let index = allBullets.indexOf(this);
    allBullets.splice(index, 1);
  }
  checkIfUserIsHit(user,theCanvas){
    if (
      this.x < user.x + user.width &&
      this.x + this.width > user.x &&
      this.y < user.y + user.height &&
      this.y + this.height > user.y
    ) {
      theEnemy.health -= 5;
    }
  }
  checkHit(enemyArr,theCanvas) {
    enemyArr.forEach(theEnemy => {
      if (
        this.x < theEnemy.x + theEnemy.width &&
        this.x + this.width > theEnemy.x &&
        this.y < theEnemy.y + theEnemy.height &&
        this.y + this.height > theEnemy.y
      ) {
        theEnemy.health -= 5;
      }
      if (theEnemy.health === 0) {
        for (let i = 0; i < 5; i++) {
          if (i < 4) {
            setTimeout(function() {
              theCanvas.clearEnemy(theEnemy);
              theCanvas.drawEnemy(theEnemy.enemyDying[i],theEnemy);
              
            }, 500 * i);

            if(i === 3){ 
              setTimeout(function() {
              theCanvas.clearEnemy(theEnemy);
            }, 500 * (i+1));
            }


          }
          else{
            theCanvas.clearEnemy(theEnemy);
            let indexOfEnemy = enemyArr.indexOf(theEnemy);
            enemyArr.splice(indexOfEnemy,1);
          }
        }
        // console.log(enemyArr);
      }
    });
  }
  drawEnemyBullet(theCanvas, enemyBullets, theUser){
    theCanvas.clearBullet(this);
    if (this.direction === "N") {
      if (!theCanvas.detectLine(this.x, this.y - 5)) {
        this.y -= 5;
        theCanvas.drawBullet(this);
      } else {
        this.y -= 5;
        this.checkIfUserIsHit(theUser,theCanvas);
        this.bulletCollision(enemyBullets);
      }
    }
    if (this.direction === "S") {
      if (!theCanvas.detectLine(this.x, this.y + 5)) {
        this.y += 5;
        theCanvas.drawBullet(this);
      } else {
        this.y += 5;
        this.checkIfUserIsHit(theUser,theCanvas);
        this.bulletCollision(enemyBullets);
      }
    }
    if (this.direction === "E") {
      if (!theCanvas.detectLine(this.x + 5, this.y)) {
        this.x += 5;
        theCanvas.drawBullet(this);
      } else {
        this.x += 5;
        this.checkIfUserIsHit(theUser,theCanvas);
        this.bulletCollision(enemyBullets);
      }
    }
    if (this.direction === "W") {
      if (!theCanvas.detectLine(this.x - 5, this.y)) {
        this.x -= 5;
        theCanvas.drawBullet(this);
      } else {
        this.x -= 5;
        this.checkIfUserIsHit(theUser,theCanvas);
        this.bulletCollision(enemyBullets);
      }
    }
  }
  

  drawSelf(theCanvas, allBullets, theEnemies) {
    theCanvas.clearBullet(this);
    if (this.direction === "N") {
      if (!theCanvas.detectLine(this.x, this.y - 4)) {
        this.y -= 5;
        theCanvas.drawBullet(this);
      } else {
        this.y -= 4;
        this.checkHit(theEnemies,theCanvas);
        this.bulletCollision(allBullets);
      }
    }
    if (this.direction === "S") {
      if (!theCanvas.detectLine(this.x, this.y + 4)) {
        this.y += 5;
        theCanvas.drawBullet(this);
      } else {
        this.y += 4;
        this.checkHit(theEnemies,theCanvas);
        this.bulletCollision(allBullets);
      }
    }
    if (this.direction === "E") {
      if (!theCanvas.detectLine(this.x + 4, this.y)) {
        this.x += 5;
        theCanvas.drawBullet(this);
      } else {
        this.x += 4;
        this.checkHit(theEnemies,theCanvas);
        this.bulletCollision(allBullets);
      }
    }
    if (this.direction === "W") {
      if (!theCanvas.detectLine(this.x - 4, this.y)) {
        this.x -= 5;
        theCanvas.drawBullet(this);
      } else {
        this.x -= 4;
        this.checkHit(theEnemies,theCanvas);
        this.bulletCollision(allBullets);
      }
    }
  }
}
