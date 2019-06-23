window.onload = function() {
  class Game {
    constructor() {
      this.theCanvas = new MapCanvas();
      this.user = new Player();
      this.enemies = [
        new Enemy(150, 150, 10, 10, 4),
        new Enemy(300, 150, 10, 10, 4),
        new Enemy(50, 250, 10, 10, 4),
        new Enemy(350, 300, 10, 10, 5),
        new Enemy(490, 160, 10, 10, 4),
        new Enemy(360, 400, 10, 10, 0),
        new Enemy(155, 540, 10, 10, 4)
      ];
      this.bullets = [];
      this.lastArrowPressed = "N";
    }

    drawGame() {
      this.theCanvas.drawMap();
    }

    isWinner() {
      if (
        this.user.keyAcquired === true &&
        this.user.x > 130 &&
        this.user.x < 140 &&
        this.user.y < 150 &&
        this.user.y > 135
      ) {
        return true;
      }
      return false;
    }

    animate() {
      setInterval(() => {
        this.enemies.forEach(theEnemy => {
          theEnemy.drawSelf(this.theCanvas);
        });
      }, 120);
    }
    shoot() {
      setInterval(() => {
        this.bullets.forEach((theBullet) => {
          theBullet.drawSelf(this.theCanvas,this.bullets);
        });
      }, 20);
    }
  }

  $(document).keydown(function(e) {
    let directions = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (directions.includes(e.key)) {
      e.preventDefault();
      myGame.user.moveYourSelf(e.key, myGame.theCanvas, myGame);
      myGame.user.gotKey(myGame.theCanvas);
      myGame.theCanvas.drawKey(myGame.user);
      if (myGame.isWinner()) {
        alert("winner");
      }
    }

    if (e.code === "Space") {
      e.preventDefault();
      let currBullet = new Bullet(
        myGame.user.x,
        myGame.user.y,
        myGame.lastArrowPressed
      );
      myGame.bullets.push(currBullet);
      console.log(myGame.bullets);
    }
  });

  let myGame = new Game();
  myGame.drawGame();
  myGame.user.moveYourSelf("w", myGame.theCanvas);
  myGame.theCanvas.drawKey(myGame.user);
  myGame.animate();
  myGame.shoot();
};
